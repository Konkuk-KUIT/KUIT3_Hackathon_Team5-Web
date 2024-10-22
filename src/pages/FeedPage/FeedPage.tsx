import * as HPS from "@/pages/HomePage";
import { Habit } from "@/components/habit";
import { format, eachDayOfInterval, parseISO } from "date-fns";
import styled from "styled-components";
import HeartIcn from "@/assets/heart.svg";
import HeartPinkIcn from "@/assets/heart-pink.svg";
import { useEffect, useState } from "react";

interface HabitComponentProps {
	habitData: Habit;
}

const FeedTitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
	width: 100%;
`;

const FeedNickNameDiv = styled.div`
	display: flex;
	height: 25px;
	padding: 12px 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6px;
	border-radius: 12px;
`;

const HeartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	user-select: none;
`;

const HeartAnimation = styled.img`
	@keyframes heartAnimation {
		0% {
			opacity: 1;
			transform: scale(1) translateY(100px);
		}
		100% {
			opacity: 0;
			transform: scale(25) translateY(-100px);
		}
	}

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;
	animation: heartAnimation 1s forwards;
`;

function generateDateRange(startDate: string, endDate: string) {
	const start = parseISO(startDate);
	const end = parseISO(endDate);
	return eachDayOfInterval({ start, end });
}

function FeedComponent({ habitData }: HabitComponentProps) {
	const dateRange = generateDateRange(habitData.startDate, habitData.endDate);
	const checksSet = new Set(habitData.checkedDates.map((check: string) => format(parseISO(check), "MM/dd")));

	const [likes, setLikes] = useState(habitData.likes);
	const [hearts, setHearts] = useState<number[]>([]); // 여러 애니메이션 상태 관리

	const handleLikeClick = async () => {
		try {
			setLikes(likes + 1); // 하트 수 증가

			const newHeartId = Date.now();
			setHearts([...hearts, newHeartId]); // 새로운 애니메이션 추가

			setTimeout(() => {
				setHearts((prevHearts) => prevHearts.filter((id) => id !== newHeartId)); // 애니메이션 제거
			}, 1000); // 애니메이션 지속 시간과 일치

			const response = await fetch(`${import.meta.env.VITE_API_BACK_URL}/habits/like?habitId=${habitData.habitId}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ habitId: habitData.habitId }),
			});

			if (!response.ok) {
				throw new Error("Failed to update likes on the server");
			}

			const result = await response.json();
			console.log("Like updated successfully", result);
		} catch (error) {
			console.error("Error updating likes:", error);
		}
	};

	return (
		<HPS.HabitContnents>
			{hearts.map((heartId) => (
				<HeartAnimation key={heartId} src={HeartPinkIcn} alt="Heart Animation" />
			))}
			<FeedTitleDiv>
				<FeedNickNameDiv style={{ backgroundColor: `${habitData.backgroundColor}` }}>{habitData.userNickname}의 목표</FeedNickNameDiv>
				<HeartContainer onClick={handleLikeClick} style={{ cursor: "pointer" }}>
					<img src={HeartIcn} alt="HeartIcn" />
					<div>{likes}</div>
				</HeartContainer>
			</FeedTitleDiv>
			<HPS.HabitTitleDiv>
				<div>{habitData.habitName}</div>
				<HPS.HabitSuccessRate style={{ backgroundColor: `${habitData.backgroundColor}` }}>달성률 {Math.round(habitData.progress * 100 * 10) / 10}%</HPS.HabitSuccessRate>
			</HPS.HabitTitleDiv>
			<HPS.HabitDateReviewDiv>
				<HPS.HabitDateDiv>
					{habitData &&
						dateRange.map((date) => {
							const formattedDate = format(date, "MM/dd");
							const isChecked = checksSet.has(formattedDate);

							return (
								<HPS.DateDiv key={formattedDate} style={{ backgroundColor: `${habitData.backgroundColor}` }}>
									{formattedDate}
									{isChecked && <HPS.StickerImg src={habitData.stickerImg} alt="Sticker" />}
								</HPS.DateDiv>
							);
						})}
				</HPS.HabitDateDiv>
				<HPS.HabitReview>한줄평 : {habitData.memo}</HPS.HabitReview>
			</HPS.HabitDateReviewDiv>
		</HPS.HabitContnents>
	);
}

const fetchUserHabits = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_BACK_URL}/feed/habits`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	//console.log("User habits:", data);
	return data;
};

export default function FeedPage() {
	const [habits, setHabits] = useState<Habit[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchUserHabits();
				const { data } = res;
				//console.log(data.habits);
				setHabits(data?.feeds);
			} catch (error) {
				console.error("Error fetching habits:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<HPS.HomeContainer>
			{habits ? (
				habits.map((habits, id) => {
					return <FeedComponent key={id} habitData={habits} />;
				})
			) : (
				<div>피드가 없어요오오오....</div>
			)}
		</HPS.HomeContainer>
	);
}

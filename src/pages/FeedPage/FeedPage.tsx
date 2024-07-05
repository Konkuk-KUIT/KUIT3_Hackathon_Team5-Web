import * as HPS from "@/pages/HomePage";
import { Habit } from "@/components/habit";
import { format, eachDayOfInterval, parseISO } from "date-fns";
import styled from "styled-components";
import HeartIcn from "@/assets/heart.svg";
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

function generateDateRange(startDate: string, endDate: string) {
	const start = parseISO(startDate);
	const end = parseISO(endDate);
	return eachDayOfInterval({ start, end });
}

function FeedComponent({ habitData }: HabitComponentProps) {
	const dateRange = generateDateRange(habitData.startDate, habitData.endDate);
	const checksSet = new Set(habitData.checkedDates.map((check: string) => format(parseISO(check), "MM/dd")));

	return (
		<HPS.HabitContnents>
			<FeedTitleDiv>
				<img src={HeartIcn} alt="HeartIcn" />
				<div>{habitData.likes}</div>
			</FeedTitleDiv>
			<HPS.HabitTitleDiv>
				<div>{habitData.userNickname}</div>
				<HPS.HabitSuccessRate style={{ backgroundColor: `${habitData.backgroundColor}` }}>달성률 {habitData.progress * 100}%</HPS.HabitSuccessRate>
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
	const response = await fetch(`${import.meta.env.VITE_API_BACK_URL}/feed/habits/`, {
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
				setHabits(data?.habits);
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

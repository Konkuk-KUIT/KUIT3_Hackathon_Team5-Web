import CalenderIcn from "@/assets/HomePage/calender.svg";
import { Button } from "@/styles/Button";
import styled from "styled-components";
import { format, eachDayOfInterval, parseISO } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const HomeContainer = styled.div`
	display: flex;
	padding: 0px 30px;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

export const HabitContnents = styled.div`
	display: flex;
	height: 180px;
	padding: 20px 0px;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	align-self: stretch;
`;

export const HabitTitleDiv = styled.div`
	display: flex;
	height: 35px;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;
	border-top: 2px solid #000;
	border-bottom: 1px solid #000;
`;

export const HabitSuccessRate = styled.div`
	display: flex;
	height: 20px;
	padding: 12px 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6px;
	border-radius: 12px;
	background: #d5ccee;

	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.4px;
`;

export const HabitDateReviewDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;

	border-bottom: 2px solid #000;
`;

export const HabitDateDiv = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	gap: 5px;
	align-self: stretch;
	flex-wrap: wrap;
`;

export const HabitReview = styled.div`
	display: flex;
	flex-direction: column;
	align-self: stretch;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.4px;
	align-items: flex-start;
	padding-bottom: 5px;
`;

export const DateDiv = styled.div`
	display: flex;
	width: 45px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	font-size: 14px;
`;

export const StickerImg = styled.img`
	position: absolute;
	opacity: 0.8;
	width: 25px;
	height: 25px;
`;

interface Habit {
	userId: number;
	userNickname?: string;
	likes: number;
	habitName: string;
	progress: number;
	stickerImg: string;
	backgroundColor: string;
	startDate: string;
	endDate: string;
	checkedDates: string[];
	memo: string;
	habitId?: number;
}

interface HabitComponentProps {
	habitData: Habit;
}

function generateDateRange(startDate: string, endDate: string) {
	const start = parseISO(startDate);
	const end = parseISO(endDate);
	return eachDayOfInterval({ start, end });
}

function HabitComponent({ habitData }: HabitComponentProps) {
	//console.log(habitData?.startDate, habitData?.endDate);
	const dateRange = generateDateRange(habitData?.startDate, habitData?.endDate);
	const checksSet = new Set(habitData.checkedDates?.map((check: string) => format(parseISO(check), "MM/dd")));

	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/habitDetail/${habitData.userId}`, { state: { habitData } });
	};

	return (
		<HabitContnents onClick={handleClick}>
			<HabitTitleDiv>
				<div>{habitData.habitName}</div>
				<HabitSuccessRate style={{ backgroundColor: `${habitData.backgroundColor}` }}>달성률 {Math.round(habitData.progress * 100 * 10) / 10}%</HabitSuccessRate>
			</HabitTitleDiv>
			<HabitDateReviewDiv>
				<HabitDateDiv>
					{habitData &&
						dateRange.map((date) => {
							const formattedDate = format(date, "MM/dd");
							const isChecked = checksSet.has(formattedDate);

							return (
								<>
									<DateDiv key={formattedDate} style={{ backgroundColor: `${habitData.backgroundColor}` }}>
										{formattedDate}
										{isChecked && <StickerImg src={habitData.stickerImg} alt="Sticker" />}
									</DateDiv>
								</>
							);
						})}
				</HabitDateDiv>
				<HabitReview>한줄평 : {habitData.memo}</HabitReview>
			</HabitDateReviewDiv>
		</HabitContnents>
	);
}

const fetchUserHabits = async (userId: string) => {
	const response = await fetch(`${import.meta.env.VITE_API_BACK_URL}/users/${userId}/habbits/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	//console.log("User habits:", data);
	return data;
};

export default function HomePage() {
	const [habits, setHabits] = useState<Habit[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchUserHabits("1");
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
		<HomeContainer>
			<Link to="/login" style={{ width: "100%" }}>
				<Button>
					<div>로그인 페이지</div>
				</Button>
			</Link>
			<Link to="/addHabit" style={{ width: "100%" }}>
				<Button>
					<img src={CalenderIcn} alt="CalenderIcn" />
					<div>새 목표 만들기</div>
				</Button>
			</Link>
			{habits ? (
				habits?.map((habit: Habit, id) => {
					return <HabitComponent key={id} habitData={habit} />;
				})
			) : (
				<div>목표를 새로 만들어 주세요오오오....</div>
			)}
			<Link to="/myProgress" style={{ width: "100%" }}>
				<Button>
					<div>나의 진행률 확인하기</div>
				</Button>
			</Link>
		</HomeContainer>
	);
}

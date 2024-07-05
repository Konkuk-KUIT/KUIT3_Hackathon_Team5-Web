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
`;

interface Habit {
	id: number;
	likes: number;
	name: string;
	progress: number;
	sticker_img: string;
	background_color: string;
	start_date: string;
	end_date: string;
	checks: string[];
	memo: string;
}

interface ResponseData {
	code: string;
	message: string;
	data: Habit[];
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
	const dateRange = generateDateRange(habitData.start_date, habitData.end_date);
	const checksSet = new Set(habitData.checks.map((check: string) => format(parseISO(check), "MM/dd")));

	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/habitDetail/${habitData.id}`, { state: { habitData } });
	};

	return (
		<HabitContnents onClick={handleClick}>
			<HabitTitleDiv>
				<div>{habitData.name}</div>
				<HabitSuccessRate style={{ backgroundColor: `${habitData.background_color}` }}>달성률 {habitData.progress * 100}%</HabitSuccessRate>
			</HabitTitleDiv>
			<HabitDateReviewDiv>
				<HabitDateDiv>
					{habitData &&
						dateRange.map((date) => {
							const formattedDate = format(date, "MM/dd");
							const isChecked = checksSet.has(formattedDate);

							return (
								<>
									<DateDiv key={formattedDate} style={{ backgroundColor: `${habitData.background_color}` }}>
										{formattedDate}
										{isChecked && <StickerImg src={habitData.sticker_img} alt="Sticker" />}
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

const fetchUserHabits = async (userId: int) => {
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
	const [habits, setHabits] = useState<Habit[]>([]); // Initialize state for habits

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchUserHabits(1); // Assuming "1" is the user ID
				const { data } = res;
				//console.log(data);
				setHabits(data.habits); // Update state with fetched data
			} catch (error) {
				console.error("Error fetching habits:", error);
				// Handle errors as needed
			}
		};

		fetchData(); // Call the async function to fetch data when the component mounts
	}, []); // Empty dependency array means this effect runs only once after the initial render

	return (
		<HomeContainer>
			<Link to="/login" style={{ width: "100%" }}>
				<Button>
					<div>로그인하기</div>
				</Button>
			</Link>
			<Link to="/addHabit" style={{ width: "100%" }}>
				<Button>
					<img src={CalenderIcn} alt="CalenderIcn" />
					<div>새 목표 만들기</div>
				</Button>
			</Link>
			{habits ? (
				habits.map((habit: Habit) => {
					return <HabitComponent key={habit.id} habitData={habit} />;
				})
			) : (
				<div>목표를 새로 만들어 주세요오오오....</div>
			)}
		</HomeContainer>
	);
}

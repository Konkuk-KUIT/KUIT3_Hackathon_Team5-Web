import CalenderIcn from "@/assets/HomePage/calender.svg";
import { Button } from "@/styles/Button";
import styled from "styled-components";
import { format, eachDayOfInterval, parseISO } from "date-fns";

const HomeContainer = styled.div`
	display: flex;
	padding: 0px 20px;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

const HabitContnents = styled.div`
	display: flex;
	height: 180px;
	padding: 20px 0px;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	align-self: stretch;
`;

const HabitTitleDiv = styled.div`
	display: flex;
	height: 35px;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;
	border-top: 2px solid #000;
	border-bottom: 1px solid #000;
`;

const HabitSuccessRate = styled.div`
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

const HabitDateReviewDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;

	border-bottom: 2px solid #000;
`;

const HabitDateDiv = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	gap: 5px;
	align-self: stretch;
	flex-wrap: wrap;
`;

const HabitReview = styled.div`
	display: flex;
	height: 35px;
	flex-direction: column;
	align-self: stretch;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.4px;
	align-items: flex-start;
`;

const DateDiv = styled.div`
	display: flex;
	width: 45px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	font-size: 14px;
`;

const StickerImg = styled.img`
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

	return (
		<HabitContnents>
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

export default function HomePage() {
	const sampleRes: ResponseData = {
		code: "string",
		message: "string",
		data: [
			{
				id: 1,
				likes: 10,
				name: "Habit 1 목표이름",
				progress: 0.75,
				sticker_img: "https://via.placeholder.com/25",
				background_color: "#ffcc00",
				start_date: "2023-06-01",
				end_date: "2023-06-15",
				checks: ["2023-06-01", "2023-06-03", "2023-06-05"],
				memo: "This is a memo 디자인 너무 못했다 흑흑",
			},
			{
				id: 2,
				likes: 10,
				name: "Habit 1 목표이름",
				progress: 0.75,
				sticker_img: "https://via.placeholder.com/25",
				background_color: "#ffcc00",
				start_date: "2023-06-01",
				end_date: "2023-06-15",
				checks: ["2023-06-01", "2023-06-03", "2023-06-05"],
				memo: "This is a memo 디자인 너무 못했다 흑흑",
			},
			{
				id: 3,
				likes: 10,
				name: "Habit 1 목표이름",
				progress: 0.75,
				sticker_img: "https://via.placeholder.com/25",
				background_color: "#ffcc00",
				start_date: "2023-06-01",
				end_date: "2023-06-15",
				checks: ["2023-06-01", "2023-06-03", "2023-06-05"],
				memo: "This is a memo 디자인 너무 못했다 흑흑",
			},
		],
	};

	const { data } = sampleRes;

	return (
		<HomeContainer>
			<Button>
				<img src={CalenderIcn} />
				<div>새 목표 만들기</div>
			</Button>
			{data ? (
				data.map((habit) => {
					return <HabitComponent key={habit.id} habitData={habit} />;
				})
			) : (
				<div>목표를 새로 만들어 주세요오오오....</div>
			)}
		</HomeContainer>
	);
}

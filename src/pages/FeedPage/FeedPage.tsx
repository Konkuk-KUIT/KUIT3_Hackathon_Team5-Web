import * as HPS from "@/pages/HomePage";
import { Habit } from "@/components/habit";
import { format, eachDayOfInterval, parseISO } from "date-fns";

interface HabitComponentProps {
	habitData: Habit;
}

function generateDateRange(startDate: string, endDate: string) {
	const start = parseISO(startDate);
	const end = parseISO(endDate);
	return eachDayOfInterval({ start, end });
}

function FeedComponent({ habitData }: HabitComponentProps) {
	const dateRange = generateDateRange(habitData.start_date, habitData.end_date);
	const checksSet = new Set(habitData.checks.map((check: string) => format(parseISO(check), "MM/dd")));

	return (
		<HPS.HomeContainer>
			<HPS.HabitContnents>
				<HPS.HabitTitleDiv>
					<div>{habitData.name}</div>
					<HPS.HabitSuccessRate style={{ backgroundColor: `${habitData.background_color}` }}>달성률 {habitData.progress * 100}%</HPS.HabitSuccessRate>
				</HPS.HabitTitleDiv>
				<HPS.HabitDateReviewDiv>
					<HPS.HabitDateDiv>
						{habitData &&
							dateRange.map((date) => {
								const formattedDate = format(date, "MM/dd");
								const isChecked = checksSet.has(formattedDate);

								return (
									<HPS.DateDiv key={formattedDate} style={{ backgroundColor: `${habitData.background_color}` }}>
										{formattedDate}
										{isChecked && <HPS.StickerImg src={habitData.sticker_img} alt="Sticker" />}
									</HPS.DateDiv>
								);
							})}
					</HPS.HabitDateDiv>
					<HPS.HabitReview>한줄평 : {habitData.memo}</HPS.HabitReview>
				</HPS.HabitDateReviewDiv>
			</HPS.HabitContnents>
		</HPS.HomeContainer>
	);
}

export default function FeedPage() {
	const sampleRes = {
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
		<HPS.HomeContainer>
			{data ? (
				data.map((habit: Habit) => {
					return <FeedComponent key={habit.id} habitData={habit} />;
				})
			) : (
				<div>피드가 없어요오오오....</div>
			)}
		</HPS.HomeContainer>
	);
}

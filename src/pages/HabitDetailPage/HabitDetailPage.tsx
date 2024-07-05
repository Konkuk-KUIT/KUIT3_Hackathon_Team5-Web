import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Habit } from "@/components/habit";
import * as HPS from "@/pages/HomePage";
import { format, eachDayOfInterval, parseISO } from "date-fns";
import { Button } from "@/styles/Button";
import CalenderIcn from "@/assets/HomePage/calender.svg";
import styled from "styled-components";

const TitleInput = styled.input`
	border: 1px solid #5d3db5c5;
	width: 50%;
`;

const MemoInput = styled.textarea`
	border: 1px solid #5d3db5c5;
	width: 100%;
`;

function generateDateRange(startDate: string, endDate: string) {
	const start = parseISO(startDate);
	const end = parseISO(endDate);
	return eachDayOfInterval({ start, end });
}

export default function HabitDetailPage() {
	const location = useLocation();
	const { habitData } = location.state as { habitData: Habit };

	const [name, setName] = useState(habitData.name);
	const [memo, setMemo] = useState(habitData.memo);
	const [checks, setChecks] = useState(new Set(habitData.checks.map((check: string) => format(parseISO(check), "yyyy-MM-dd"))));

	const dateRange = generateDateRange(habitData.start_date, habitData.end_date);

	const handleClickHabitMod = () => {
		// Fetch request로 habitData를 업데이트하는 로직
		fetch(`${import.meta.env.VITE_API_BACK_URL}/habits/memo`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ ...habitData, name, memo, checks: Array.from(checks) }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Updated successfully", data);
			})
			.catch((error) => {
				console.error("Error updating habit:", error);
			});
	};

	const toggleCheck = (date: Date) => {
		const formattedDate = format(date, "yyyy-MM-dd");
		setChecks((prevChecks) => {
			const newChecks = new Set(prevChecks);
			if (newChecks.has(formattedDate)) {
				newChecks.delete(formattedDate);
			} else {
				newChecks.add(formattedDate);
			}
			return newChecks;
		});
	};

	return (
		<HPS.HomeContainer>
			<HPS.HabitContnents>
				<HPS.HabitTitleDiv>
					<TitleInput type="text" placeholder="제목" value={name} onChange={(e) => setName(e.target.value)} />
					<HPS.HabitSuccessRate style={{ backgroundColor: `${habitData.background_color}` }}>달성률 {habitData.progress * 100}%</HPS.HabitSuccessRate>
				</HPS.HabitTitleDiv>
				<HPS.HabitDateReviewDiv>
					<HPS.HabitDateDiv>
						{habitData &&
							dateRange.map((date) => {
								const formattedDate = format(date, "MM/dd");
								const isChecked = checks.has(format(date, "yyyy-MM-dd"));

								return (
									<HPS.DateDiv key={formattedDate} style={{ backgroundColor: `${habitData.background_color}`, cursor: "pointer" }} onClick={() => toggleCheck(date)}>
										{formattedDate}
										{isChecked && <HPS.StickerImg src={habitData.sticker_img} alt="Sticker" />}
									</HPS.DateDiv>
								);
							})}
					</HPS.HabitDateDiv>
					<MemoInput value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="한줄평" />
				</HPS.HabitDateReviewDiv>
				<Button onClick={handleClickHabitMod}>
					<img src={CalenderIcn} alt="CalenderIcn" />
					<div>목표 수정 완료</div>
				</Button>
			</HPS.HabitContnents>
		</HPS.HomeContainer>
	);
}

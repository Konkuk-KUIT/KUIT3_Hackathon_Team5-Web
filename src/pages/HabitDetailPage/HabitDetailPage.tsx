import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

function convertSetToString(set: Set<string>): string {
	const datesArray = Array.from(set).map((date) => `&dates=${date}`);

	datesArray.push("&isCheck=true");

	const queryString = datesArray.join("");
	return queryString;
}

function convertSetToString_exclude(set: Set<string>, dateRange: Date[]): string {
	// 포함되지 않은 날짜들을 모아서 문자열로 변환합니다.
	const excludedDates = dateRange.filter((date) => !set.has(format(date, "yyyy-MM-dd"))).map((date) => `&dates=${format(date, "yyyy-MM-dd")}`);

	// isCheck=false를 추가합니다.
	excludedDates.push("&isCheck=false");

	// 포함된 날짜와 포함되지 않은 날짜들을 합쳐서 최종 문자열을 생성합니다.
	const queryString = [...excludedDates].join("");
	return queryString;
}

export default function HabitDetailPage() {
	const location = useLocation();
	const { habitData } = location.state as { habitData: Habit };

	const [name, setName] = useState(habitData.habitName);
	const [memo, setMemo] = useState(habitData.memo);
	const [checks, setChecks] = useState(new Set(habitData.checkedDates?.map((check: string) => format(parseISO(check), "yyyy-MM-dd"))));

	const dateRange = generateDateRange(habitData.startDate, habitData.endDate);

	const navigate = useNavigate();
	const handleClickHabitMod = () => {
		// console.log(JSON.stringify({ ...habitData, name, memo, checks: Array.from(checks) }));
		// Fetch request로 habitData를 업데이트하는 로직
		fetch(`${import.meta.env.VITE_API_BACK_URL}/habits/memo?habitId=${habitData.habitId}&memo=${memo}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ habitId: habitData.habitId, memo: habitData.memo }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Updated successfully", data);
			})
			.catch((error) => {
				console.error("Error updating habit:", error);
			});

		fetch(`${import.meta.env.VITE_API_BACK_URL}/habits/check?habitId=${habitData.habitId}${convertSetToString(checks)}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ habitId: habitData.habitId, memo: habitData.memo }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Updated successfully", data);
			})
			.catch((error) => {
				console.error("Error updating habit:", error);
			});

		fetch(`${import.meta.env.VITE_API_BACK_URL}/habits/check?habitId=${habitData.habitId}${convertSetToString_exclude(checks, dateRange)}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Updated successfully", data);
			})
			.catch((error) => {
				console.error("Error updating habit:", error);
			});

		fetch(`${import.meta.env.VITE_API_BACK_URL}/habits/name?habitId=${habitData.habitId}&name=${name}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Updated successfully", data);
			})
			.catch((error) => {
				console.error("Error updating habit:", error);
			});

		navigate(`/`, { state: { habitData } });
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

	console.log(`${import.meta.env.VITE_API_BACK_URL}/habits/check?habitId=${habitData.habitId}${convertSetToString_exclude(checks, dateRange)}`);
	return (
		<HPS.HomeContainer>
			<HPS.HabitContnents>
				<HPS.HabitTitleDiv>
					<TitleInput type="text" placeholder="제목" value={name} onChange={(e) => setName(e.target.value)} />
					<HPS.HabitSuccessRate style={{ backgroundColor: `${habitData.backgroundColor}` }}>달성률 {Math.round(habitData.progress * 100 * 10) / 10}%</HPS.HabitSuccessRate>
				</HPS.HabitTitleDiv>
				<HPS.HabitDateReviewDiv>
					<HPS.HabitDateDiv>
						{habitData &&
							dateRange.map((date) => {
								const formattedDate = format(date, "MM/dd");
								const isChecked = checks.has(format(date, "yyyy-MM-dd"));

								return (
									<HPS.DateDiv key={formattedDate} style={{ backgroundColor: `${habitData.backgroundColor}`, cursor: "pointer" }} onClick={() => toggleCheck(date)}>
										{formattedDate}
										{isChecked && <HPS.StickerImg src={habitData.stickerImg} alt="Sticker" width={25} height={25} />}
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

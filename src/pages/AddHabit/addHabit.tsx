//import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import arrowImg from "@/assets/period.svg";
import characterImg from "@/assets/character.svg";
import { Button } from "@/styles/Button.tsx";

const StyledTotal = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	align-items: center;
`;

const StyledInputBox = styled.div`
	flex-direction: row;
	justify-content: center;
	width: 100%;
	height: 44px;
	flex-shrink: 0;
	background-color: #f8f7f7;
	border-radius: 8px;
	justify-content: center;
	margin-left: 31px;
`;


const StyledPeriod = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`;

const StyledMemoBox = styled.div`
	width: 100%;
	height: 150px;
	flex-shrink: 0;
	background-color: #f8f7f7;
	border-radius: 8px;
	margin-bottom: 30px;
`;

const TextContent = styled.p`
	text-align: center;
	font-size: 17px;
	margin-top: 11px;
	align-items: center;
`;

const StyledP = styled.p`
	font-size: 17px;
	margin-top: 11px;
`;


const addHabit = () => {
    const [habbitName, setHabbitName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [memo, setMemo] = useState('');

    const handleHabbitNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHabbitName(event.target.value);
    };
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };
    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };
    const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMemo(event.target.value);
    };
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(1);
        console.log({
            habbitName,
            startDate,
            endDate,
            memo
        });

        const url = import.meta.env.VITE_API_BACK_URL;
        fetch(url + "/habits/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "userId": 1,
                "name": habbitName,
                "start_date": startDate,
                "end_date": endDate,
                "background_color": "#FFFFFF",
                "sticker_id": 1,
                "memo": memo
            }),
        })
            .then((response) => response.json())
            .then((result) => console.log("결과: ", result));

        navigate("/");
    };


    return (
        <StyledTotal>
            <StyledP>습관 이름</StyledP>
            <StyledInputBox>
                <input name="habbitName" type="text" className="bg-customGray w-full h-full text-2xl" value={habbitName}
                    onChange={handleHabbitNameChange}
                ></input>
            </StyledInputBox>
            {/* <StyledInputBox type="text" placeholder="이름을 입력하세요."></StyledInputBox> */}

            <StyledP>기간</StyledP>
            <StyledPeriod>
                <input type="date" value={startDate} onChange={handleStartDateChange}></input>
                <img src={arrowImg} alt="화살표"></img>
                <input type="date" value={endDate} onChange={handleEndDateChange}></input>
            </StyledPeriod>

            <StyledP>스티커 선택</StyledP>
            <img src={characterImg} className="w-20 h-20" alt="캐릭터 선택"></img>

            <StyledP>배경색 선택</StyledP>
            <input type="color" id="backgroundColorPicker" className="w-20 h-20"></input>

            <StyledP>메모</StyledP>
            <StyledMemoBox>
                <textarea className="bg-customGray w-full h-full text-xl" value={memo} onChange={handleMemoChange}></textarea>
            </StyledMemoBox>
            <Button onClick={handleClick}>
                <TextContent>습관 등록</TextContent>
            </Button>
            {/* <AddButton onClick={handleClick}><TextContent>습관 등록</TextContent></AddButton> */}
        </StyledTotal>
    );
}

export default addHabit;
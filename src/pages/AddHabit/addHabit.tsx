// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styled from 'styled-components';
import arrowImg from "@/assets/period.svg";
import characterImg from "@/assets/character.svg";

const StyledTotal = styled.div`
    width: 390px;
    height: 844px;
    align-items: center;
    background-color: #65A55B;
`;

const StyledInputBox = styled.div`
    width: 328px;
    height: 44px;
    flex-shrink: 0;
    background-color: #F8F7F7;
    border-radius: 8px;
    justify-content: center;
    margin-left: 31px
`;

const StyledBox = styled.div`
    width: 124px;
    height: 44px;
    flex-shrink: 0;
    margin-right: 20px;
    margin-left: 10px;
    background-color: #F8F7F7;
    border-radius: 8px;
`;

const StyledPeriod = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 31px
    
`;

const StyledMemoBox = styled.div`
    width: 328px;
    height: 150px;
    flex-shrink: 0;

    background-color: #F8F7F7;
    border-radius: 8px;
    margin-left: 31px

`;

const AddButton = styled.div`
    align-content: center;
    width: 328px;
    height: 48px;
    border-radius: 12px;
    background: #D5CCEE;
    gap: 10px;
    margin-left: 31px

`;
const TextContent = styled.p`
  text-align: center;
  font-size: 17px;
  margin-top: 11px;
  align-items: 
`;


export default function addHabit() {
	return (
    <StyledTotal>
        <p className="text-left text-[17px] ">
            습관 이름
        </p>
        <StyledInputBox></StyledInputBox>

        <p className="text-left text-[17px]">기간</p>
        <StyledPeriod>
        <StyledBox>h</StyledBox>
        <img src={arrowImg}></img>
        <StyledBox>j</StyledBox>
        </StyledPeriod>


        <p className="text-left text-[17px]">스티커 선택</p>
        <img src={characterImg}></img>

        <p className="text-left text-[17px]">배경색 선택</p>

        <p className="text-left text-[17px]">메모</p>
        <StyledMemoBox>memo</StyledMemoBox>
        <AddButton><TextContent>습관 등록</TextContent></AddButton>
    </StyledTotal>

    ) 
}
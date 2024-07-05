//import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styled from 'styled-components';
import arrowImg from "@/assets/period.svg";
import characterImg from "@/assets/character.svg";
import { Button } from '@/styles/Button.tsx';

const StyledTotal = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items : center;
    

`;

const StyledInputBox = styled.div`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 44px;
    flex-shrink: 0;
    background-color: #F8F7F7;
    border-radius: 8px;
    justify-content: center;
    margin-left: 31px
`;

const StyledBox = styled.div`
    width: 100px;
    height: 44px;

    background-color: #F8F7F7;
    border-radius: 8px;
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
    background-color: #F8F7F7;
    border-radius: 8px;
    margin-bottom: 30px;


`;

const AddButton = styled.div`
    align-content: center;
    width: 328px;
    height: 48px;
    border-radius: 12px;
    background: #D5CCEE;
    gap: 10px;
    margin-left: 31px;

`;
const TextContent = styled.p`
  text-align: center;
  font-size: 17px;
  margin-top: 11px;
  align-items: 
`;

const StyledP = styled.p`
font-size: 17px;
margin-top: 11px;

`;

const handleClick = () => {
    console.log(1);
};


// function setHabbitName(){
//     console.log(1);

// }

//const [habitName, sethabitName] = useState("");

export default function addHabit() {
    return (
        <StyledTotal>
            <StyledP>
                습관 이름
            </StyledP>
            <StyledInputBox><input type="text" className="bg-customGray w-full h-full text-2xl"></input></StyledInputBox>
            {/* <StyledInputBox type="text" placeholder="이름을 입력하세요."></StyledInputBox> */}

            <StyledP>기간</StyledP>
            <StyledPeriod>
                <input type="date"></input>
                <img src={arrowImg}></img>
                <input type="date"></input>

            </StyledPeriod>


            <StyledP>스티커 선택</StyledP>
            <img src={characterImg} className="w-20 h-20"></img>

            <StyledP>배경색 선택</StyledP>
            <input type="color" id="backgroundColorPicker" className="w-20 h-20"></input>

            <StyledP>메모</StyledP>
            <StyledMemoBox><textarea className="bg-customGray w-full h-full text-xl"></textarea></StyledMemoBox>
            <Button><TextContent>습관 등록</TextContent></Button>
            {/* <AddButton onClick={handleClick}><TextContent>습관 등록</TextContent></AddButton> */}
        </StyledTotal>

    )
}
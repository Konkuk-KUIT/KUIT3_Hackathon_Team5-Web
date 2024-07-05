import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import DoughnutChart from "./DoughnutChart";


const StyledTotal = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	align-items: center;
`;

const StyledText1 = styled.div`
	display: flex;
	flex-direction: row;
	width: 328px;
	text-align: center;
	justify-content: center;
	flex-shrink: 0;
	height: 40px;
    align-items: center;
`;

const StyledText2 = styled.div`
display: flex;
flex-direction: row;
width: 328px;

justify-content: center;
flex-shrink: 0;
align-items: center;
`;

const StyledTprogress = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom:20px;
`;

const Doughnut = styled.div`
	width: 100%;
	height: 100%;
`;

const StyledNum = styled.div`
	height: 100%;
	font-size: 30px;
	padding-left: 10px;
	padding-right: 10px;
	text-align: center;
`;

const Progress = styled.progress`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 17px;
    appearance: none;
    width: 100%;
    height: 60px;
    padding-top: 17px;
    padding-left:200px;
    padding-right:200px;
    padding-bottom: 17px;
  
  &::-webkit-progress-bar {
    background: #f0f0f0;
    border-radius: 12px;
    border: 1px solid #eeeeee;
    height: 45px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
  }
  
  &::-webkit-progress-value {
    background: #C57BED;
    border-radius: 0px;
    height: 45px;
    width: 90%;
  }
`;

export default function myProgress() {
    const data = [
        { name: '도전중', value: 10, color: '#782EBF' },
        { name: '도전 성공', value: 20, color: '#8E9EE9' },
        { name: '도전 실패', value: 30, color: '#9D80E0' },
    ];
    // const test = 90;
    // const successNum = 11;
    const [rate, setRate] = useState(90)
    const [successNum, setsuccessNum] = useState(10)

    useEffect(() => {
        fetch('http://43.201.218.143:8080/users/1/statistics', {
        }).then(res => res.json()).then(res => {
            console.log(1, res);
        });
    }, []);

    return (
        <StyledTotal>
            <StyledText1>현재
                <StyledNum><p className="text-4xl">{rate}%</p></StyledNum>
                성공률로
            </StyledText1>
            <StyledText1>습관 형성중이에요!</StyledText1>
            <StyledTprogress>

                <Progress
                    className="progress"
                    id="progress"
                    value="90"
                    max="100">
                </Progress>

            </StyledTprogress>
            <StyledText2>지금까지</StyledText2>
            <StyledText2><StyledNum><p className="text-4xl">{successNum}</p></StyledNum> 개의</StyledText2>
            <StyledText2>습관을 형성했어요!</StyledText2>

            <Doughnut>
                <DoughnutChart data={data} />
            </Doughnut>

        </StyledTotal>
    );
}


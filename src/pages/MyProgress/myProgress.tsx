import styled from "styled-components";
import React, { useEffect, useState } from 'react';
// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DoughnutChart from "./DoughnutChart";

// interface DoughnutChartProps {
//     data: number[];
//     labels: string[];
//     backgroundColors: string[];
// }

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
height: 30px;
justify-content: center;
flex-shrink: 0;
align-items: center;
`;

const StyledTprogress = styled.div`
    width: 100%;
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

export default function myProgress() {
    const data = [
        { name: '도전중', value: 10, color: '#782EBF' },
        { name: '도전 성공', value: 20, color: '#8E9EE9' },
        { name: '도전 실패', value: 30, color: '#9D80E0' },
    ];
    // const test = 90;
    // const successNum = 11;
    const [rate, setRate] = useState(0)
    const [successNum, setsuccessNum] = useState(0)

    useEffect(() => {
        fetch('http://43.201.218.143:8080/myprogress', {
        }).then(res => res.json()).then(res => {
            console.log(1, res);
        });
    }, []);

    return (
        <StyledTotal>
            <StyledText1>현재
                <StyledNum>{rate}</StyledNum>
                % 성공률로
            </StyledText1>
            <StyledText1>습관 형성중이에요!</StyledText1>
            <StyledTprogress>

                <progress id="progress" value="50" max="100" style={{ width: '50%', height: '30px', appearance: 'none' }}>
                    70%
                </progress>

            </StyledTprogress>
            <StyledText2>지금까지</StyledText2>
            <StyledText2><StyledNum>{successNum}</StyledNum> 개의</StyledText2>
            <StyledText2>습관을 형성했어요!</StyledText2>

            <Doughnut>
                <DoughnutChart data={data} />
            </Doughnut>

        </StyledTotal>
    );
}


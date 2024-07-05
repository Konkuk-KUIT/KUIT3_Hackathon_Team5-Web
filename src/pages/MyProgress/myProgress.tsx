import styled from 'styled-components';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DoughnutChart from './DoughnutChart';

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  backgroundColors: string[];
}

const StyledTotal= styled.div`
width: 390px;
height: 844px;
align-items: center;
background-color: #65A55B;
`;

const StyledText1 = styled.div`
display: flex;
width: 328px;
height: 30px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
`;

const StyledText2 = styled.div`
display: flex;
width: 328px;
height: 30px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
`;

const StyledTprogress = styled.div`

`;

const Doughnut = styled.div`
  width: 100%;
  height: 300px;
`;

export default function myProgress() {
    const data = [
        { name: '도전중', value: 10, color: '#782EBF' },
        { name: '도전 성공', value: 20, color: '#8E9EE9' },
        { name: '도전 실패', value: 30, color: '#9D80E0' },
      ];

	return (
    <StyledTotal>
    <StyledText1>현재 90% 성공률로 </StyledText1>
    <StyledText1>습관 형성중이에요!</StyledText1>
    <StyledTprogress>
    <progress id="progress" value="50" max="100"></progress>
    </StyledTprogress>



    <StyledText2>지금까지</StyledText2>
    <StyledText2>11개의 습관을 형성했어요!</StyledText2>

    <Doughnut>
        <DoughnutChart data={data} />
    </Doughnut>

    </StyledTotal>
    );
}
import React from "react";
import { Donut } from "react-dial-knob";
import { To, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackImg from "@/assets/ManagementPage/left_arrow.svg";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
`;

const Header = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 13px;
    padding-bottom: 13px;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 20px;
`;

const Span1 = styled.span`
    font-family: pretendard;
    font-size: 17px;
`;

const GoalPage = () => {
    const [value, setValue] = React.useState(80)

    const navigate = useNavigate();

    const handleNavigate = (path: To) => {
        navigate(path);
    };

    return (

        <Body>
            <Header onClick={() => handleNavigate('/option')}>
                <Icon src={BackImg} alt="arrow" />
                <Span1>내 정보 관리</Span1>
            </Header>

            <Donut
                diameter={200}
                min={0}
                max={100}
                step={1}
                value={value}
                theme={{
                    donutColor: 'lightcoral'
                }}
                style={{
                    position: 'relative',
                    margin: '100px auto',
                    width: '200px'
                }}
                onValueChange={setValue}
                ariaLabelledBy={'my-label'}
                spaceMaxFromZero={false}
            >
                <label id={'my-label'} style={{
                    textAlign: 'center',
                    width: '200px',
                    display: 'block',
                    padding: '10px 0'
                }}>딩신의 한계는?</label>
            </Donut>
        </Body>
    );
}

export default GoalPage
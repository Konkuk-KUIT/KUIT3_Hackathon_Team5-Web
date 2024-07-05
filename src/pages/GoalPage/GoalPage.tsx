import styled from 'styled-components';

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
    display: flex;
    font-family: pretendard;
    font-size: 17px;
    text-align: start;
`;

const Title = styled.span`
    font-family: pretendard;
    font-size: 32px;
`;

const GoalPage = () => {
    return (
        <Body>
            <Header>
                <Icon src="" alt="arrow" />
                <Span1>목표 설정</Span1>
            </Header>

            <Title>당신의 한계는?!</Title>



        </Body>
    )
}

export default GoalPage
import { To, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackImg from "@/assets/NoticePage/left_arrow.svg";
import ExtendImg from "@/assets/NoticePage/up_arrow.svg";
import ReduceImg from "@/assets/NoticePage/down_arrow.svg";

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

const Notice1 = styled.div`
    display: flex;
    height: 82px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

const Notice2 = styled.div`
    display: flex;
    height: 102px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
`;

const Subtitle = styled.div`
    display: flex
    height: 50px;
    padding: 17px;
    background: #F6F6F6;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 20px;
`;

const Extend = styled.img`
    width: 24px;
    height: 24px;
`;

const InfoImg = styled.img`
    width: 390px;
    height: 200px;
    background: #ECECEC;
`

const Span1 = styled.span`
    display: flex;
    width: 300px;
    font-family: pretendard;
    font-size: 17px;
    text-align: start;
`;

const Span2 = styled.span`
    display: flex;
    font-family: pretendard;
    font-size: 13px;
`;

const Date = styled.span`
    display: flex;
    justify-content: flex-start;
    font-family: pretendard;
    font-size: 12px;
    color: #6B7684;
`;

const Info = styled.span`
    display: flex;
    padding: 17px;
    font-family: pretendard;
    font-size: 12px;
    text-align: start;
`;

const NoticePage = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: To) => {
        navigate(path);
    };

    return (
        <Body>
            <Header onClick={() => handleNavigate('/option')}>
                <Icon src={BackImg} alt="arrow" />
                <Span1>공지사항</Span1>
            </Header>

            <Notice1>
                <Title>
                    <Date>24-07-06</Date>
                    <Span1>해커톤 프로젝트 완수! 2.0.0 업데이트 안내</Span1>
                </Title>
                <Extend src={ExtendImg} alt="arrow" />
            </Notice1>

            <Notice2>
                <Title>
                    <Date>24-07-05</Date>
                    <Span1>뜨거운 여름바람과 함께 찾아온 1.0.1 업데이트 안내</Span1>
                </Title>
                <Extend src={ExtendImg} alt="arrow" />
            </Notice2>

            <Notice1>
                <Title>
                    <Date>24-07-05</Date>
                    <Span1>안드로이드 프로토타입 버전 안내 (v 1.0.0)</Span1>
                </Title>
                <Extend src={ReduceImg} alt="arrow" />
            </Notice1>

            <Subtitle>
                <Span2>#하긴 쉽지만 마음먹기 어려운 것들, 당신도 해낼 수 있어요!</Span2>
            </Subtitle>

            <InfoImg src="" alt="info-image" />

            <Info>
                방학동안에 느긋하게 쉬면서도, 미래를 위해 하루하루 해내야하는 일들!
                지금껏 동기부여 없이 늘어져있던 여러분들을 위해 야심차게 준비했습니다~
                습관을 등록해서 매일 스티커를 채워가는 만족감을 느껴보세요!
                성공적으로 습관을 수행했다면 따끈따끈한 신상 스티커를 살 기회까지!!
                지금까지 이런 어플은 없었다! 이건 자기개발 어플인가 꾸미기 어플인가..
                귀엽게 응원하는 스티커들과 함께 습관을 완성해보세요.
            </Info>
        </Body>
    )
}

export default NoticePage
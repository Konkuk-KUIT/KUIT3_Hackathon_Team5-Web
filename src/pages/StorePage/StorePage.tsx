import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
`;

const Header = styled.div`
    display: flex;
    height: 38px;
    align-items: center;
`;

const StickerList = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 14px;
    padding-bottom: 14px;
`;

const Stickers = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Background = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #ECECEC;
`;

const Info = styled.div`
    display: flex;
    height: 191px;
    padding: 20px;
`;

const Info1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
`;

const Info2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 6px;
`;

const Info3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 151px;
    align-items: center;
`

const Point = styled.span`
    font-family: pretendard;
    font-size: 16px;
    color: #6B7684;
`;

const Level = styled.span`
    display: flex;
    font-family: pretendard;
    font-size: 17px;
    margin-bottom: 14px;
`;

const Buy = styled.button`
    width: 52px;
    height: 32px;
    font-family: pretendard;
    font-size: 13px;
    border-radius: 12px;
    background: #D5CCEE;
`;

const PointImg1 = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 10px;
`;

const PointImg2 = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 7px;
`;


const Sticker = styled.img`
    width: 60px;
    height: 60px;
    background: #FFFFFF;
`;

const StorePage = () => {

    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        const fetchStickers = async () => {
            const response = await fetch('/sticker.json');
            if (!response.ok) {
                throw new Error('네트워크 반응 오류');
            }
            const result = await response.json();
            if (result.code !== 'success') {
                throw new Error(result.message);
            }
            setStickers(result.data);
        };

        fetchStickers();
    }, []);

    // 스티커를 4개씩 묶어서 배열로 변환
    const chunkedStickers = [];
    for (let i = 0; i < stickers.length; i += 4) {
        chunkedStickers.push(stickers.slice(i, i + 4));
    }

    return (
        <Body>
            <Header>
                <PointImg1 src="" alt="point" /> <Point>{0}</Point>
            </Header>

            {chunkedStickers.map((level, levelIndex) => (
                <StickerList key={levelIndex}>
                    <Level>Level {levelIndex + 1}</Level>
                    <Stickers>
                        {level.map(sticker => (
                            <Background>
                                <Sticker key={sticker.id} src={sticker.image} alt={`sticker${sticker.id}`} />
                            </Background>
                        ))}
                    </Stickers>
                </StickerList>
            ))}

            <StickerList>
                <Level>Level 1</Level>
                <Stickers>
                    <Background>
                        <Sticker src="" alt="sticker1" />
                    </Background>
                    <Background>
                        <Sticker src="" alt="sticker2" />
                    </Background>
                    <Background>
                        <Sticker src="" alt="sticker3" />
                    </Background>
                    <Background>
                        <Sticker src="" alt="sticker4" />
                    </Background>
                </Stickers>
            </StickerList>

            <StickerList>
                <Level>Level 2</Level>
                <Stickers>
                    <Background>
                        <Sticker src="" alt="sticker1" />
                    </Background>
                    <Background>
                        <Sticker src="" alt="sticker2" />
                    </Background>
                    <Background>
                        <Sticker src="" alt="sticker3" />
                    </Background>
                    <Background>
                        <Sticker src="" alt="sticker4" />
                    </Background>
                </Stickers>
            </StickerList>

            <Info>
                <Info1>
                    <Background>
                        <Sticker src="" alt="sticker4" />
                    </Background>
                    <Info2>
                        <PointImg2 src="" alt="point" />
                        <Point>1</Point>
                    </Info2>
                    <Buy>구매</Buy>
                </Info1>
                <Info3>
                    <span>열혈 응원가 젤리가이</span>
                    <p>당신의 열렬한 팬</p>
                </Info3>
            </Info>
        </Body>
    )
}

export default StorePage;
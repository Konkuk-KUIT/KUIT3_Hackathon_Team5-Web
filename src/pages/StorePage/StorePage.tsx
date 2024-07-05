import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PointImg from "@/assets/StorePage/fire.svg";
import StickerImg1 from "@/assets/Sticker/sticker1.svg";
import StickerImg2 from "@/assets/Sticker/sticker2.svg";
import StickerImg3 from "@/assets/Sticker/sticker3.svg";
import StickerImg4 from "@/assets/Sticker/sticker4.svg";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
`;

const Header = styled.div`
    display: flex;
    width: 390px;
    height: 38px;
    align-items: center;
    z-index: 3;
    position: fixed;
    left: 0;
	top: 200px;
    background: #FFFFFF;
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

const Sticker = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 12px;
    background: #ECECEC;
`;

const StickerHover = styled.div`
    display: flex;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.45);
    color: white;
    font-family: pretendard;
    font-size: 16px;
    border-radius: 12px;
    position: absolute;
    left: 0;
    top: 0;
`;

const Blank = styled.div`
    height: 191px;
`;

const Info = styled.div`
    display: flex;
    height: 191px;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
	left: 0;
	bottom: 96px;
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

const StickerName = styled.span`
    display: flex;
    font-family: pretendard;
    font-size: 17px;
    text-align: start;
`;

const StickerInfo = styled.span`
    display: flex;
    font-family: pretendard;
    font-size: 16px;
    text-align: start;
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

const StickerImage = styled.img`
    width: 60px;
    height: 60px;
    background: #FFFFFF;
    cursor: pointer;
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
    const chunkedStickers = [[{ id: 1, image: "/asset/temp.svg", status: "SOLD_OUT" }]];
    for (let i = 0; i < stickers.length; i += 4) {
        chunkedStickers.push(stickers.slice(i, i + 4));
    }

    return (
        <Body>
            <Header>
                <PointImg1 src={PointImg} alt="point" /> <Point>{0}</Point>
            </Header>

            {chunkedStickers.map((level, levelIndex) => (
                <StickerList key={levelIndex}>
                    <Level>Level {levelIndex + 1}</Level>
                    <Stickers>
                        {level.map(sticker => (
                            <Sticker>
                                <StickerImage key={sticker.id} src={StickerImg1} alt={`sticker${sticker.id}`} />
                                {sticker.status === "SOLD_OUT" && (
                                    <StickerHover>SOLD OUT</StickerHover>
                                )}
                            </Sticker>
                        ))}
                    </Stickers>
                </StickerList>
            ))}

            <StickerList>
                <Level>Level 2</Level>
                <Stickers>
                    <Sticker>
                        <StickerImage src={StickerImg1} alt="sticker1" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg2} alt="sticker2" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg3} alt="sticker3" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg4} alt="sticker4" />
                    </Sticker>
                </Stickers>
            </StickerList>

            <StickerList>
                <Level>Level 3</Level>
                <Stickers>
                    <Sticker>
                        <StickerImage src={StickerImg1} alt="sticker1" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg2} alt="sticker2" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg3} alt="sticker3" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg4} alt="sticker4" />
                    </Sticker>
                </Stickers>
            </StickerList>

            <StickerList>
                <Level>Level 4</Level>
                <Stickers>
                    <Sticker>
                        <StickerImage src={StickerImg1} alt="sticker1" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg2} alt="sticker2" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg3} alt="sticker3" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg4} alt="sticker4" />
                    </Sticker>
                </Stickers>
            </StickerList>

            <StickerList>
                <Level>Level 5</Level>
                <Stickers>
                    <Sticker>
                        <StickerImage src={StickerImg1} alt="sticker1" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg2} alt="sticker2" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg3} alt="sticker3" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg4} alt="sticker4" />
                    </Sticker>
                </Stickers>
            </StickerList>

            <StickerList>
                <Level>Level 6</Level>
                <Stickers>
                    <Sticker>
                        <StickerImage src={StickerImg1} alt="sticker1" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg2} alt="sticker2" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg3} alt="sticker3" />
                    </Sticker>
                    <Sticker>
                        <StickerImage src={StickerImg4} alt="sticker4" />
                    </Sticker>
                </Stickers>
            </StickerList>

            <Blank></Blank>

            <Info>
                <Info1>
                    <Sticker>
                        <StickerImage src="/asset/temp.svg" alt="sticker" />
                    </Sticker>
                    <Info2>
                        <PointImg2 src={PointImg} alt="point" />
                        <Point>1</Point>
                    </Info2>
                    <Buy>구매</Buy>
                </Info1>
                <Info3>
                    <StickerName>열혈 응원가 젤리가이</StickerName>
                    <StickerInfo>
                        오늘도 힘내서 습관을 달성하는 당신을 위해
                        머나먼 젤리왕국에서 파견나온 당신의 열혈팬!!
                        당신이 습관을 하나씩 완수할 때마다
                        언제나 처음처럼 열렬히 환호해줄거에요!
                    </StickerInfo>
                </Info3>
            </Info>
        </Body>
    )
}

export default StorePage;
import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
`;

const Profile = styled.div`
    display: flex;
    height: 90px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

const Div1 = styled.div`
    display: flex;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
`;

const Notice = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const Goal = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const Nickname = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const Logout = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`

const Sticker = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: #ECECEC;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 20px;
`;

const Name = styled.span`
    display: flex;
    font-family: pretendard;
    font-size: 17px;
`;

const Phone = styled.span`
    display: flex;
    font-family: pretendard;
    font-size: 12px;
    color: #6B7684;
`;

const Span1 = styled.span`
    font-family: pretendard;
    font-size: 17px;
`;

const Manage = styled.button`
    width: 52px;
    height: 32px;
    font-family: pretendard;
    font-size: 13px;
    border-radius: 12px;
    background: #D5CCEE;
`;

const OptionPage = () => {
  return (
    <Body>
        <Profile>
            <Div1>
                <Sticker src="" alt="sticker4" />
                <UserInfo>
                    <Name>김성유</Name>
                    <Phone>+82 10-7470-4007</Phone>
                </UserInfo>
            </Div1>
            <Manage>관리</Manage>
        </Profile>

        <Notice>
            <Icon src="" alt="notice" />
            <Span1>공지사항</Span1>
        </Notice>

        <Goal>
            <Icon src="" alt="goal" />
            <Span1>성공 기준 설정</Span1>
        </Goal>

        <Nickname>
            <Icon src="" alt="nickname" />
            <Span1>닉네임 설정</Span1>
        </Nickname>

        <Logout>
            <Icon src="" alt="logout" />
            <Span1>로그아웃</Span1>
        </Logout>
    </Body>
  );
};

export default OptionPage;
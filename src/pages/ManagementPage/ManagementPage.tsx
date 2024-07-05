import React from 'react'
import styled from 'styled-components'

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

const Phone = styled.div`
    display: flex;
    height: 80px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Email = styled.div`
    display: flex;
    height: 80px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Profile = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 14px;
    padding-bottom: 14px;
`;

const Leave = styled.div`
    display: flex;
    height: 50px;
    padding-left: 20px;
    padding-top: 14px;
    padding-bottom: 14px;
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

const Span2 = styled.span`
    font-family: pretendard;
    font-size: 12px;
    color: #6B7684;
`;
const ManagementPage = () => {
  return (
    <Body>
        <Header>
            <Icon src="" alt="arrow" />
            <Span1>내 정보 관리</Span1>
        </Header>

        <Phone>
            <Span1>전화번호</Span1>
            <Span2>+82 10-1234-5678</Span2>
        </Phone>

        <Email>
            <Span1>이메일</Span1>
            <Span2>seongyou@gmail.com</Span2>
        </Email>

        <Profile>
            <Span1>프로필 편집</Span1>
        </Profile>

        <Leave>
            <Span1>탈퇴하기</Span1>
        </Leave>
    </Body>
  )
}

export default ManagementPage
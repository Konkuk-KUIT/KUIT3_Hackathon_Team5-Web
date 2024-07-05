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

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Name = styled.div`
  display: flex;
`;

const StatusMessage = styled.div`
  display: flex;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 20px;
`;

const Edit = styled.img`
    width: 20px;
    height: 20px;
`

const Sticker = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    border-radius: 12px;
    background: #ECECEC;
`;

const Span1 = styled.span`
    margin-bottom: 20px;
    font-family: pretendard;
    font-size: 17px;
`;

const Span2 = styled.span`
    margin-bottom: 20px;
    font-family: pretendard;
    font-size: 15px;
`;

const Save = styled.button`
    width: 80px;
    height: 32px;
    margin-top: 20px;
    font-family: pretendard;
    font-size: 13px;
    border-radius: 12px;
    background: #D5CCEE;
`;

const ProfileEditPage = () => {
  return (
    <Body>
      <Header>
        <Icon src="" alt="arrow" />
        <Span1>프로필 편집</Span1>
      </Header>

      <ProfileInfo>
        <Sticker src="" alt="profile_img" />

        <Name>
          <Span1>김성유</Span1>
          <Edit src="" alt="edit" />
        </Name>

        <StatusMessage>
          <Span2>열심히 파이팅!</Span2>
          <Edit src="" alt="edit" />
        </StatusMessage>

        <Save>저장하기</Save>
      </ProfileInfo>
    </Body>

  );
};

export default ProfileEditPage;
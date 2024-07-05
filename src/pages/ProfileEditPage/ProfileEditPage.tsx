import { To, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackImg from "@/assets/ProfileEditPage/left_arrow.svg";
import CameraImg from "@/assets/ProfileEditPage/camera.svg";
import EditImg from "@/assets/ProfileEditPage/pencil.svg";

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
  width: 390px;
  justify-content: center;
  position: relative;
`;

const StatusMessage = styled.div`
  display: flex;
  width: 390px;
  justify-content: center;
  position: relative;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 20px;
`;

const Edit = styled.img`
    width: 20px;
    height: 20px;
    z-index: 2;
    position: absolute;
    right: 20px;
    top: 0;
`
const Sticker = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    position: relative;
`;

const StickerImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: #ECECEC;
    cursor: pointer;
`;

const Camera = styled.img`
  width: 20px;
  height: 20px;
  z-index: 2;
  position: absolute;
  right: -10px;
  bottom: -2px;
`

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
  const navigate = useNavigate();

  const handleNavigate = (path: To) => {
    navigate(path);
  };

  return (
    <Body>
      <Header onClick={() => handleNavigate('/option/management')}>
        <Icon src={BackImg} alt="arrow" />
        <Span1>프로필 편집</Span1>
      </Header>

      <ProfileInfo>
        <Sticker>
          <StickerImage src="" alt="profile_img" />
          <Camera src={CameraImg} alt="camera" />
        </Sticker>

        <Name>
          <Span1>김성유</Span1>
          <Edit src={EditImg} alt="edit" />
        </Name>

        <StatusMessage>
          <Span2>열심히 파이팅!</Span2>
          <Edit src={EditImg} alt="edit" />
        </StatusMessage>

        <Save>저장하기</Save>
      </ProfileInfo>
    </Body>

  );
};

export default ProfileEditPage;
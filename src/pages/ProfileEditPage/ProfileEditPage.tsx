import { useEffect, useRef, useState } from 'react';
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

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    width: 300px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalCloseBtn = styled.button`
    align-self: flex-end;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 16px;
`;

const ModalInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const ModalSaveBtn = styled.button`
    padding: 10px 20px;
    background-color: #D5CCEE;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
`;

const ProfileEditPage = () => {
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [statusMsgModalOpen, setStatusMsgModalOpen] = useState(false);
  const [name, setName] = useState("김성유");
  const [statusMsg, setStatusMsg] = useState("오늘도 힘내자!!");
  const [newName, setNewName] = useState(name);
  const [newStatusMsg, setNewStatusMsg] = useState(statusMsg);
  const nameModalRef = useRef<HTMLDivElement>(null);
  const statusMsgModalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleNavigate = (path: To) => {
    navigate(path);
  };

  const handleClickOutsideName = (e: MouseEvent) => {
    if (nameModalRef.current && !nameModalRef.current.contains(e.target as Node)) {
      setNameModalOpen(false);
    }
  };

  const handleClickOutsideStatusMsg = (e: MouseEvent) => {
    if (statusMsgModalRef.current && !statusMsgModalRef.current.contains(e.target as Node)) {
      setStatusMsgModalOpen(false);
    }
  };

  useEffect(() => {
    if (nameModalOpen) {
      document.addEventListener('mousedown', handleClickOutsideName);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideName);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideName);
    };
  }, [nameModalOpen]);

  useEffect(() => {
    if (statusMsgModalOpen) {
      document.addEventListener('mousedown', handleClickOutsideStatusMsg);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideStatusMsg);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideStatusMsg);
    };
  }, [statusMsgModalOpen]);

  const handleSaveName = () => {
    setName(newName);
    setNameModalOpen(false);
  };

  const handleSaveStatusMsg = () => {
    setStatusMsg(newStatusMsg);
    setStatusMsgModalOpen(false);
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

        <Name onClick={() => setNameModalOpen(true)}>
          <Span1>{name}</Span1>
          <Edit src={EditImg} alt="edit" />
        </Name>

        {nameModalOpen && (
          <ModalContainer>
            <ModalContent ref={nameModalRef}>
              <ModalCloseBtn onClick={() => setNameModalOpen(false)}>×</ModalCloseBtn>
              <ModalInput
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <ModalSaveBtn onClick={handleSaveName}>저장</ModalSaveBtn>
            </ModalContent>
          </ModalContainer>
        )}

        <StatusMessage onClick={() => setStatusMsgModalOpen(true)}>
          <Span2>{statusMsg}</Span2>
          <Edit src={EditImg} alt="edit" />
        </StatusMessage>

        {statusMsgModalOpen && (
          <ModalContainer>
            <ModalContent ref={statusMsgModalRef}>
              <ModalCloseBtn onClick={() => setStatusMsgModalOpen(false)}>×</ModalCloseBtn>
              <ModalInput
                type="text"
                value={newStatusMsg}
                onChange={(e) => setNewStatusMsg(e.target.value)}
              />
              <ModalSaveBtn onClick={handleSaveStatusMsg}>저장</ModalSaveBtn>
            </ModalContent>
          </ModalContainer>
        )}

      </ProfileInfo>
    </Body>

  );
};

export default ProfileEditPage;
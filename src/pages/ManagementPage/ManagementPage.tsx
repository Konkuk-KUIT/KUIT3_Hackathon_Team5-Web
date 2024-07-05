import { useEffect, useRef, useState } from 'react';
import { To, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
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

const ManagementPage = () => {
    const [phoneModalOpen, setPhoneModalOpen] = useState(false);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [phone, setPhone] = useState("+82 10-1234-5678");
    const [email, setEmail] = useState("seongyou@gmail.com");
    const [newPhone, setNewPhone] = useState(phone);
    const [newEmail, setNewEmail] = useState(email);
    const phoneModalRef = useRef<HTMLDivElement>(null);
    const emailModalRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const handleNavigate = (path: To) => {
        navigate(path);
    };

    const handleClickOutsidePhone = (e: MouseEvent) => {
        if (phoneModalRef.current && !phoneModalRef.current.contains(e.target as Node)) {
            setPhoneModalOpen(false);
        }
    };

    const handleClickOutsideEmail = (e: MouseEvent) => {
        if (emailModalRef.current && !emailModalRef.current.contains(e.target as Node)) {
            setEmailModalOpen(false);
        }
    };

    useEffect(() => {
        if (phoneModalOpen) {
            document.addEventListener('mousedown', handleClickOutsidePhone);
        } else {
            document.removeEventListener('mousedown', handleClickOutsidePhone);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePhone);
        };
    }, [phoneModalOpen]);

    useEffect(() => {
        if (emailModalOpen) {
            document.addEventListener('mousedown', handleClickOutsideEmail);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideEmail);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideEmail);
        };
    }, [emailModalOpen]);

    const handleSavePhone = () => {
        setPhone(newPhone);
        setPhoneModalOpen(false);
    };

    const handleSaveEmail = () => {
        setEmail(newEmail);
        setEmailModalOpen(false);
    };

    return (
        <Body>
            <Header onClick={() => handleNavigate('/option')}>
                <Icon src={BackImg} alt="arrow" />
                <Span1>내 정보 관리</Span1>
            </Header>

            <Phone onClick={() => setPhoneModalOpen(true)}>
                <Span1>전화번호</Span1>
                <Span2>{phone}</Span2>
            </Phone>

            {phoneModalOpen && (
                <ModalContainer>
                    <ModalContent ref={phoneModalRef}>
                        <ModalCloseBtn onClick={() => setPhoneModalOpen(false)}>×</ModalCloseBtn>
                        <ModalInput
                            type="text"
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                        />
                        <ModalSaveBtn onClick={handleSavePhone}>저장</ModalSaveBtn>
                    </ModalContent>
                </ModalContainer>
            )}

            <Email onClick={() => setEmailModalOpen(true)}>
                <Span1>이메일</Span1>
                <Span2>{email}</Span2>
            </Email>

            {emailModalOpen && (
                <ModalContainer>
                    <ModalContent ref={emailModalRef}>
                        <ModalCloseBtn onClick={() => setEmailModalOpen(false)}>×</ModalCloseBtn>
                        <ModalInput
                            type="text"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <ModalSaveBtn onClick={handleSaveEmail}>저장</ModalSaveBtn>
                    </ModalContent>
                </ModalContainer>
            )}

            <Profile onClick={() => handleNavigate('/option/management/profile')}>
                <Span1>프로필 편집</Span1>
            </Profile>

            <Leave onClick={() => handleNavigate('/login')}>
                <Span1>탈퇴하기</Span1>
            </Leave>
        </Body>
    );
};

export default ManagementPage;
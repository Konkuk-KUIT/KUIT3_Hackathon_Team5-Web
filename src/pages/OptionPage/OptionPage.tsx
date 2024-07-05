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
`;

const Div1 = styled.div`
    display: flex;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sticker = styled.img`
    width: 80px;
    height: 80px;
    background: #ECECEC;
`;

const Span1 = styled.span`
    size: 17px;
`;

const Span2 = styled.span`
    size: 12px;
    color: #6B7684;
`;

const Manage = styled.button`
    width: 52px;
    height: 32px;
    border-radius: 12px;
    background: #D5CCEE;
`

const OptionPage = () => {
  return (
    <Body>
        <Profile>
            <Div1>
                <Sticker src="" alt="sticker4" />
                <Div2>
                    <Span1>김성유</Span1>
                    <Span2>+82 10-7470-4007</Span2>
                </Div2>
            </Div1>
            
            <Manage>관리</Manage>
        </Profile>
    </Body>
  );
};

export default OptionPage;
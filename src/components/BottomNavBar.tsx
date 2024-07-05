import styled from "styled-components";
import HomeBtnImg from "@/assets/BottomNavBar/home-btn.svg";
import FeedBtnImg from "@/assets/BottomNavBar/feed-btn.svg";
import StoreBtnImg from "@/assets/BottomNavBar/store-btn.svg";
import SettingBtnImg from "@/assets/BottomNavBar/setting-btn.svg";
import { Link } from "react-router-dom";

const BottomNavBarDiv = styled.div`
	border-radius: 16px 16px 0px 0px;
	background: #fff;
	box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
`;

const BtnsDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
	flex-direction: row;
	padding: 20px 0 20px 0;
`;
const BtnDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function BottomNavBar() {
	return (
		<BottomNavBarDiv>
			<BtnsDiv>
				<Link to="/">
					<BtnDiv>
						<img src={HomeBtnImg} width={32} height={32} />
						<div>홈</div>
					</BtnDiv>
				</Link>
				<Link to="/feed">
					<BtnDiv>
						<img src={FeedBtnImg} width={32} height={32} />
						<div>피드</div>
					</BtnDiv>
				</Link>
				<Link to="/store">
					<BtnDiv>
						<img src={StoreBtnImg} width={32} height={32} />
						<div>상점</div>
					</BtnDiv>
				</Link>
				<Link to="/option">
					<BtnDiv>
						<img src={SettingBtnImg} width={32} height={32} />
						<div>설정</div>
					</BtnDiv>
				</Link>
			</BtnsDiv>
		</BottomNavBarDiv>
	);
}

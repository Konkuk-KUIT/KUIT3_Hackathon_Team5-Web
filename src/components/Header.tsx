import HeaderImg from "@/assets/header-img.svg";
import styled from "styled-components";

const FrameDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 150px;

	border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	@keyframes drift {
		100% {
			transform: rotate(-360deg);
		}
	}
`;

const WrapDiv = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	background: rgb(171, 255, 248);
	background: linear-gradient(180deg, rgba(171, 255, 248, 1) 37%, rgba(255, 228, 192, 1) 81%);
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	transform: translate3d(0, 0, 0);
`;

const WaveDivLayer = styled.div`
	animation: drift 8s infinite linear;
	background: rgba(255, 255, 255, 0.2);
`;

const WaveDiv = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	animation: drift 4s infinite linear;
	background: rgba(255, 255, 255, 0.4);
`;

export default function Header() {
	return (
		<div>
			{/* <FrameDiv>
				<WrapDiv>
					<WaveDiv></WaveDiv>
					<WaveDivLayer></WaveDivLayer>
				</WrapDiv>
			</FrameDiv> */}
			<img src={HeaderImg} />
		</div>
	);
}

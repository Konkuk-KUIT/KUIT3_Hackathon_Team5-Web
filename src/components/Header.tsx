import { useEffect, useRef } from "react";
import styled from "styled-components";

const EventWrap = styled.div`
	overflow: hidden;
	height: 200px;
	position: fixed;
	z-index: 9;
	left: 0;
	top: 0;
	width: 100%;
	background: linear-gradient(180deg, rgba(171, 255, 248, 1) 37%, rgba(255, 228, 192, 1) 81%);
	border-radius: 0px 0px 16px 16px;
`;

const WaveBox = styled.div`
	position: relative;
	display: block;
	margin: auto;
	width: 100%;
	height: 100%;
`;

const Wave = styled.div`
	background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='157'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%23ffffff50' stop-opacity='1' offset='0%25'/%3E%3Cstop stop-color='%23ffffff50' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 80C311 80 409.898-.25 811 0c400 0 500 80 789 80v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)'/%3E%3C/svg%3E")
		repeat-x;
	position: absolute;
	bottom: 0;
	width: 6400px;
	height: 80px;
	animation: wave 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
	transform: translate3d(0, 0, 0);
`;

const WaveLayer = styled(Wave)`
	animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
	background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='157'%3E%3Cdefs%3E%3ClinearGradient id='b' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%23ffffff40' stop-opacity='1' offset='0%25'/%3E%3Cstop stop-color='%23ffffff40' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23b)' fill-rule='evenodd' d='M.005 80C311 80 409.898-.25 811 0c400 0 500 80 789 80v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)'/%3E%3C/svg%3E")
		repeat-x;
`;

const WaveAnimation = styled.div`
	@keyframes wave {
		0% {
			margin-left: -1600px;
		}
		100% {
			margin-left: 0px;
		}
	}
`;

const TitleP = styled.p`
	font-family: "BMJUA";
	font-size: 2.5em;
	font-weight: bold;
	letter-spacing: 0.1em;
	color: #5d3db5c5;
	cursor: default;
`;

export default function Header() {
	const typingElementRef1 = useRef<HTMLParagraphElement>(null);
	const typingElementRef2 = useRef<HTMLParagraphElement>(null);
	const introContent1 = "Our Summer VACIT (feat. KUIT)";
	const introContent2 = "우리들의 여름 방학습관";
	const intervalRef1 = useRef<NodeJS.Timeout | null>(null);
	const intervalRef2 = useRef<NodeJS.Timeout | null>(null);
	const idxRef1 = useRef<number>(0);
	const idxRef2 = useRef<number>(0);

	useEffect(() => {
		if (typingElementRef1.current) {
			intervalRef1.current = setInterval(() => typing(typingElementRef1, introContent1, idxRef1, intervalRef1), 100);
		}
		if (typingElementRef2.current) {
			intervalRef2.current = setInterval(() => typing(typingElementRef2, introContent2, idxRef2, intervalRef2), 100);
		}
		return () => {
			if (intervalRef1.current) clearInterval(intervalRef1.current as NodeJS.Timeout);
			if (intervalRef2.current) clearInterval(intervalRef2.current as NodeJS.Timeout);
		};
	}, []);

	const typing = (
		typingElementRef: React.MutableRefObject<HTMLParagraphElement | null>,
		introContent: string,
		idxRef: React.MutableRefObject<number>,
		intervalRef: React.MutableRefObject<NodeJS.Timeout | null>,
	) => {
		if (typingElementRef.current) {
			typingElementRef.current.innerHTML += introContent[idxRef.current];
			idxRef.current += 1;
			if (idxRef.current >= introContent.length) {
				clearInterval(intervalRef.current as NodeJS.Timeout);
			}
		}
	};

	return (
		<EventWrap>
			<WaveBox>
				<TitleP style={{ marginTop: "30px" }} ref={typingElementRef1}></TitleP>
				<TitleP ref={typingElementRef2}></TitleP>
				<Wave />
				<WaveLayer />
			</WaveBox>
			<WaveAnimation />
		</EventWrap>
	);
}

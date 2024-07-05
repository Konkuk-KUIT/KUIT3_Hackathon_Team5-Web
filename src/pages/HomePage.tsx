import CalenderIcn from "@/assets/HomePage/calender.svg";
import { Button } from "@/styles/Button";

export default function HomePage() {
	return (
		<Button>
			<img src={CalenderIcn} />
			<div>새 목표 만들기</div>
		</Button>
	);
}

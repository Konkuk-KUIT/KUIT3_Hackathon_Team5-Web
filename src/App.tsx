import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitDetailPage from "./pages/HabitDetailPage/HabitDetailPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import styled from "styled-components";

// const WrapperDiv = styled.div`
// 	height: auto;
// 	min-height: 100%;
// 	padding-bottom: 100px;
// `;

const Layout = () => (
	<>
		<Header />
		<Outlet />
		<BottomNavBar />
	</>
);

function App() {
	const routes = [
		{
			path: "/",
			element: (
				<>
					<Layout />
				</>
			),
			children: [
				{ path: "/", element: <HomePage /> },
				{ path: "/habitDetail", element: <HabitDetailPage /> },
				{ path: "/feed", element: <FeedPage /> },
				{ path: "/addHabit" },
				{ path: "/myprogress" },
				{ path: "/store" },
				{ path: "/option" },
			],
		},
	];
	const router = createBrowserRouter(routes, { basename: "/KUIT3_Hackathon_Team5-Web/" });

	return <RouterProvider router={router} />;
}

export default App;

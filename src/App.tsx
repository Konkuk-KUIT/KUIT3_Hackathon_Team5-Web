import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitDetailPage from "./pages/HabitDetailPage/HabitDetailPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import StorePage from "./pages/StorePage/StorePage";
import OptionPage from "./pages/OptionPage/OptionPage";

import AddHabit from "./pages/AddHabit/addHabit";
import MyProgress from "./pages/MyProgress/myProgress";

import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";
import styled from "styled-components";

const WrapperDiv = styled.div`
	margin-top: 230px;
	margin-bottom: 100px;
`;

const Layout = () => (
	<>
		<Header />
		<WrapperDiv>
			<Outlet />
		</WrapperDiv>
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
      { path: "/addHabit", element: <AddHabit />}, 
      { path: "/myProgress", element: <MyProgress />},
		  { path: "/store", element: <StorePage /> },
		  { path: "/option", element: <OptionPage /> },
        ],
		},
	];
	const router = createBrowserRouter(routes, { basename: "/KUIT3_Hackathon_Team5-Web/" });

	return <RouterProvider router={router} />;
}

export default App;

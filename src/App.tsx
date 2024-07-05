import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitDetailPage from "./pages/HabitDetailPage/HabitDetailPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import StorePage from "./pages/StorePage/StorePage";
import OptionPage from "./pages/OptionPage/OptionPage";
import ManagementPage from "./pages/ManagementPage/ManagementPage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import NoticePage from "./pages/NoticePage/NoticePage";


function App() {
	const routes = [
		{ path: "/", element: <HomePage /> },
		{ path: "/habitDetail", element: <HabitDetailPage /> },
		{ path: "/feed", element: <FeedPage /> },
		{ path: "/addHabit" },
		{ path: "myprogress" },
		{ path: "/store", element: <StorePage /> },
		{ path: "/option", element: <OptionPage /> },
		{ path: "/option/management", element: <ManagementPage /> },
		{ path: "/option/management/profile", element: <ProfileEditPage /> },
		{ path: "/option/notice", element: <NoticePage /> },
	];
	const router = createBrowserRouter(routes, { basename: "/KUIT3_Hackathon_Team5-Web/" });

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

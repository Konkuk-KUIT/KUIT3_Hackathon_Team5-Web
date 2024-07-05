import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitDetailPage from "./pages/HabitDetailPage/HabitDetailPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import StorePage from "./pages/StorePage/StorePage";
import OptionPage from "./pages/OptionPage/OptionPage";

function App() {
	const routes = [
		{ path: "/", element: <HomePage /> },
		{ path: "/habitDetail", element: <HabitDetailPage /> },
		{ path: "/feed", element: <FeedPage /> },
		{ path: "/addHabit" },
		{ path: "myprogress" },
		{ path: "/store", element: <StorePage /> },
		{ path: "/option", element: <OptionPage /> },
	];
	const router = createBrowserRouter(routes, { basename: "/KUIT3_Hackathon_Team5-Web/" });

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

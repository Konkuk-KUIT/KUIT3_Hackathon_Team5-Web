import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitDetailPage from "./pages/HabitDetailPage/HabitDetailPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import AddHabit from "./pages/AddHabit/addHabit";

function App() {
	const routes = [
		{ path: "/", element: <HomePage /> },
		{ path: "/habitDetail", element: <HabitDetailPage /> },
		{ path: "/feed", element: <FeedPage /> },
		{ path: "/addHabit", element: <AddHabit />}, 
		{ path: "myprogress" },
		{ path: "/store" },
		{ path: "/option" },
	];
	const router = createBrowserRouter(routes, { basename: "/KUIT3_Hackathon_Team5-Web/" });

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

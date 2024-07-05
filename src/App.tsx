import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { styled } from "styled-components";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const Button = styled.button`
	background-color: green;
`;

function Test() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Link to={"/Home"}>Go to Home</Link>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="text-3xl font-bold underline">it goes Work!!</div>
			<p className="read-the-docs">Click on the Vite and R eact logos to learn more</p>
		</>
	);
}

function App() {
	const routes = [
		{ path: "/", element: <Test /> },
		{ path: "/Home", element: <HomePage /> },
	];
	const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? "/" : "/KUIT3_Hackathon_Team5-Web/" });

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

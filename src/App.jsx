import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import StorageManager from "./pages/StorageManager.jsx";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/storage-manager", element: <StorageManager /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

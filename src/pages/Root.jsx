import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Wrapper from "../utilities/Wrapper";

function RootLayout() {
	return (
		<Wrapper>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</Wrapper>
	);
}

export default RootLayout;

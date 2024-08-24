import { NavLink } from "react-router-dom";

function MainNavigation() {
	return (
		<header>
			<nav>
				<ul className="flex justify-center gap-4">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-orange-300 hover:text-orange-300 underline" : 'hover:text-orange-300'
							}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/storage-manager"
							className={({ isActive }) =>
								isActive ? "text-orange-300 hover:text-orange-300 underline" : 'hover:text-orange-300'
							}
						>
							Storage
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;

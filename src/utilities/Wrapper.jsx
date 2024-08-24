function Wrapper({ children }) {
	return (
		<div className="w-4/5 mx-auto max-w-[1200px]">
			{children}
		</div>
	);
}

export default Wrapper;

const Heading = ({ level, children }) => {
	switch (level) {
		case "1":
			return <h1 className="">{children}</h1>;
		case "2":
			return <h2 className="">{children}</h2>;
		case "3":
			return <h3 className="">{children}</h3>;
		case "4":
			return <h4 className="">{children}</h4>;
		case "5":
			return <h5 className="">{children}</h5>;
		case "6":
			return <h6 className="">{children}</h6>;
	}
};

export default Heading;

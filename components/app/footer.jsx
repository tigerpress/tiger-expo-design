import Container from "../container";

const linkList = [
	{
		title: "Company",
		links: [
			{
				name: "About",
				href: "/about",
			},
			{
				name: "Careers",
				href: "/careers",
			},
			{
				name: "Blog",
				href: "/blog",
			},
		],
	},
	{
		title: "Help Center",
		links: [
			{
				name: "Resources",
				href: "/resources",
			},
			{
				name: "Templates",
				href: "/templates",
			},
			{
				name: "FAQ",
				href: "/faq",
			},
			{
				name: "Contact Us",
				href: "/contact",
			},
		],
	},
	{
		title: "Legal",
		links: [
			{
				name: "Privacy Policy",
				href: "/privacy-policy",
			},
			{
				name: "Terms & Conditions",
				href: "/terms-conditions",
			},
		],
	},
	{
		title: "Orders",
		links: [
			{
				name: "My Orders",
				href: "/orders",
			},
			{
				name: "Shipping",
				href: "/shipping",
			},
			{
				name: "Returns",
				href: "/returns",
			},
			{
				name: "Report an Issue",
				href: "/contact",
			},
		],
	},
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-zinc-900 py-8 text-zinc-100">
			<Container>
				<div className="grid grid-cols-2 justify-items-center gap-8 lg:grid-cols-4">
					{linkList.map((category) => (
						<div key={category.title}>
							<h2 className="font-bold uppercase">{category.title}</h2>
							<ul className="mt-2">
								{category.links.map((link) => (
									<li key={link.href}>
										<a href={link.href} className="hover:text-brand-300">
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<p className="mt-8 border-t pt-4 text-center">&copy; {year} TigerExpoDesign</p>
			</Container>
		</footer>
	);
};

export default Footer;

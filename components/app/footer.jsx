import { Container } from "../container";
import { Section } from "../section";

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
				name: "Templates",
				href: "/resources/templates",
			},
			{
				name: "FAQ",
				href: "/resources/faq",
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
				name: "Terms & Conditions",
				href: "/resources/terms",
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
		<Section as="footer">
			<Container>
				<div className="justify-items-between grid grid-cols-2 gap-8 lg:grid-cols-4">
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
		</Section>
	);
};

export { Footer };

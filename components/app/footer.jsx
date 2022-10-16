import Container from "../container";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-zinc-900 py-8 text-white">
			<Container>
				<div className="grid grid-cols-2 justify-items-center gap-8 lg:grid-cols-4">
					<div>
						<h2 className="font-bold uppercase text-zinc-200">Company</h2>
						<ul className="mt-2">
							<li>
								<a href="">TigerPress</a>
							</li>
							<li>
								<a href="">TigerBoxes</a>
							</li>
							<li>
								<a href="">VanVolumes</a>
							</li>
							<li>
								<a href="">PostaConnect</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold uppercase text-zinc-200">Help Center</h2>
						<ul className="mt-2">
							<li>
								<a href="">TigerPress</a>
							</li>
							<li>
								<a href="">TigerBoxes</a>
							</li>
							<li>
								<a href="">VanVolumes</a>
							</li>
							<li>
								<a href="">PostaConnect</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold uppercase text-zinc-200">Legal</h2>
						<ul className="mt-2">
							<li>
								<a href="">TigerPress</a>
							</li>
							<li>
								<a href="">TigerBoxes</a>
							</li>
							<li>
								<a href="">VanVolumes</a>
							</li>
							<li>
								<a href="">PostaConnect</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold uppercase text-zinc-200">Orders</h2>
						<ul className="mt-2">
							<li>
								<a href="">TigerPress</a>
							</li>
							<li>
								<a href="">TigerBoxes</a>
							</li>
							<li>
								<a href="">VanVolumes</a>
							</li>
							<li>
								<a href="">PostaConnect</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="mt-8 border-t pt-4 text-center">&copy; {year} TigerExpoDesign</p>
			</Container>
		</footer>
	);
};

export default Footer;

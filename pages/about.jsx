import Link from "next/link";
import Heading from "../components/heading";

export default function AboutPage() {
	return (
		<>
			<h1>About Us</h1>
			<p>
				Tiger Expo Design is a division of TigerPress, East Longmeadow MA. We produce folding
				cartons and custom boxes for many manufacturing companies. We are now offering digital short
				run boxes for new business start-ups or customers looking to order lower quantities of
				cartons.
			</p>
			<p>
				Tiger Expo Design is a sustainable eco-friendly printer, using green technology and
				operating in a 100,000 sq. ft. manufacturing plant in East Longmeadow, Massachusetts. We
				offer digital printing, commercial printing, and custom package printing all under one roof.
				The state of the art manufacturing facility is equipped with the latest in Green Print
				technology. TigerScorecard, Supermodels Unlimited Magazine, VanVolumes, and Tiger Expo
				Design are all divisions of TigerPress.
			</p>
			<div>
				<Link href="/request-quote">I&apos;d like a quote</Link>
				<Link href="/contact">I have a question</Link>
			</div>
		</>
	);
}

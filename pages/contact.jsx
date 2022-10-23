import Button from "../components/button";
import Container from "../components/container";
import Section from "../components/section";
import Title from "../components/title";

export default function ContactPage() {
	return (
		<Section>
			<Container>
				<Title level="h1">Contact us</Title>
				<form className="mt-9">
					<label htmlFor="">
						<span className="mt-3 mb-1 block">Your name</span>
						<input type="text" className="w-full" />
					</label>
					<label htmlFor="">
						<span className="mt-3 mb-1 block">Your Email</span>
						<input type="text" className="w-full" />
					</label>
					<label htmlFor="">
						<span className="mt-3 mb-1 block">Your Message</span>
						<textarea className="w-full" rows="12" />
					</label>
					<div className="mt-9">
						<Button>Send Message</Button>
					</div>
				</form>
			</Container>
		</Section>
	);
}

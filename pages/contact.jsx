import Button from "../components/button";
import Container from "../components/container";
import Section from "../components/section";
import Title from "../components/title";

export default function ContactPage() {
	return (
		<Section>
			<Container>
				<Title level="h1">Contact us</Title>
				<form action="" className="grid place-items-center py-9">
					<label htmlFor="">
						<span className="block">Your name</span>
						<input type="text" />
					</label>
					<label htmlFor="">
						<span className="block">Your Email</span>
						<input type="text" />
					</label>
					<label htmlFor="">
						<span className="block">Your Message</span>
						<textarea />
					</label>
					<span className="block">
						<Button>Send Message</Button>
					</span>
				</form>
			</Container>
		</Section>
	);
}

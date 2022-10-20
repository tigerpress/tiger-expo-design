import Button from "../components/button";

export default function ContactPage() {
	return (
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
	);
}

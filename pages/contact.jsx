import { useState } from "react";
import Button from "../components/button";
import Container from "../components/container";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";

export default function ContactPage() {
	const [submitting, setSubmitting] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const [error, setError] = useState("");
	const [message, setMessage] = useState({
		name: "",
		email: "",
		body: "",
	});

	const handleChange = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contactus", {
				method: "POST",
				headers: {
					authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_HEADER}`,
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(message),
			});

			setSubmitting(false);
			console.log(response);

			response.success
				? setConfirmed(true)
				: setError(
						"Your message could not be sent. We&apos;re looking into what happened, but please try again later."
				  );
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Section>
			<Container>
				<Title level="h1">Contact us</Title>

				{!confirmed && !error && (
					<form className="mt-9" onSubmit={handleSubmit}>
						<label htmlFor="name">
							<span className="mt-3 mb-1 block">Your name</span>
							<input
								type="text"
								name="name"
								className="w-full"
								value={message.name}
								onChange={handleChange}
							/>
						</label>

						<label htmlFor="email">
							<span className="mt-3 mb-1 block">Your Email</span>
							<input
								type="email"
								name="email"
								className="w-full"
								value={message.email}
								onChange={handleChange}
							/>
						</label>

						<label htmlFor="body">
							<span class="mt-3 mb-1 block">Your Message</span>
							<textarea
								name="body"
								className="w-full"
								rows="12"
								value={message.body}
								onChange={handleChange}
							/>
						</label>

						<div className="mt-9">
							<Button isLoading={submitting} loadingMessage="submitting">
								Send Message
							</Button>
						</div>
					</form>
				)}

				{confirmed && <Paragraph>Your message was sent!</Paragraph>}

				{error && (
					<Paragraph>
						Your message could not be sent. Please try again in a little while while we look into
						what happened!
					</Paragraph>
				)}
			</Container>
		</Section>
	);
}

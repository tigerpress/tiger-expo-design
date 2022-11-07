import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Container from "../components/container";
import Input from "../components/forms/input";
import TextArea from "../components/forms/textarea";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";

export default function QuoteRequestPage() {
	const [submitting, setSubmitting] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const [error, setError] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setSubmitting(true);

		try {
			const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contactus", {
				method: "POST",
				headers: {
					authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_HEADER}`,
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(data),
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
				<Title level="h1">Request a quote</Title>

				<form className="mt-9" onSubmit={handleSubmit(onSubmit)}>
					<Input name="name" label="Your name" {...register("name", { required: true })} />
					<Input name="email" label="Your email" {...register("email", { required: true })} />
					<Input name="phone" label="Your phone" {...register("phone", { required: true })} />
					<TextArea
						name="body"
						label="Describe your product(s)"
						{...register("body", { required: true })}
					/>

					<div className="mt-9">
						<Button isLoading={submitting} loadingMessage="Sending your message">
							Send Request
						</Button>
					</div>
				</form>

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

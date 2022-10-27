import Script from "next/script";
import { useEffect, useState } from "react";
import Button from "../button";

const PaymentForm = ({ clientKey, error, tryAgain2 }) => {
	const [tryAgain, setTryAgain] = useState(tryAgain2);
	const [errors, setErrors] = useState(error);

	const handleExecute = () => {
		setTryAgain(false);
		setErrors("");
		PTPayment.setup({
			styles: {
				code: {
					font_color: "#111827",
					border_color: " #D1D5DB",
					border_style: "solid",
					font_size: "1rem",
					input_border_radius: "0.5rem",
					input_border_width: "1px",
					input_font: "serif, cursive, fantasy",
					input_font_weight: "500",
					input_margin: "5px 0px 5px 20px",
					input_padding: "0.5rem",
					label_color: "#111827",
					label_size: "0.875rem",
					label_width: "100%",
					label_font: "sans-serif, arial, serif",
					label_font_weight: "normal",
					label_margin: "5px 0px 0.25rem 20px",
					label_padding: "0px",
					label_border_style: "none",
					label_border_color: "#EF9F6D",
					label_border_radius: "10px",
					label_border_width: "2px",
					background_color: "#F9FAFB",
					width: "110px",
					padding_bottom: "2px",
				},
				cc: {
					font_color: "#111827",
					border_color: " #D1D5DB",
					border_style: "solid",
					font_size: "1rem",
					input_border_radius: "0.5rem",
					input_border_width: "1px",
					input_font: "serif, cursive, fantasy",
					input_font_weight: "500",
					input_margin: "5px 0px 5px 20px",
					input_padding: "0.5rem",
					label_color: "#111827",
					label_size: "0.875rem",
					label_width: "100%",
					label_font: "sans-serif, arial, serif",
					label_font_weight: "normal",
					label_margin: "5px 0px 0.25rem 20px",
					label_padding: "0px",
					label_border_style: "none",
					label_border_color: "#EF9F6D",
					label_border_radius: "10px",
					label_border_width: "2px",
					background_color: "#F9FAFB",
					width: "auto",
					padding_bottom: "2px",
				},
				exp: {
					font_color: "#111827",
					border_color: " #D1D5DB",
					border_style: "solid",
					font_size: "0.875rem",
					input_border_radius: "0.5rem",
					input_border_width: "1px",
					input_font: "serif, cursive, fantasy",
					input_font_weight: "500",
					input_margin: "5px 0px 5px 20px",
					input_padding: "0.5rem",
					label_color: "#111827",
					label_size: "0.875rem",
					label_width: "100%",
					label_font: "sans-serif, arial, serif",
					label_font_weight: "normal",
					label_margin: "5px 0px 0.25rem 20px",
					label_padding: "0px",
					label_border_style: "none",
					label_border_color: "#EF9F6D",
					label_border_radius: "10px",
					label_border_width: "2px",
					background_color: "#F9FAFB",
					width: "110px",
					padding_bottom: "2px",
				},
			},
			authorization: {
				clientKey: `${clientKey}`,
			},
		}).then(function (instance) {});
	};

	return (
		<>
			<div className="mt-4">
				<Script
					src="https://protect.paytrace.com/js/protect.min.js"
					strategy="afterInteractive"
					onLoad={handleExecute}
				/>
				<div id="pt_hpf_form"></div>
				<p className="text-red-800">
					{typeof errors === "object" && errors != null ? Object.values(errors)[0] : errors}
				</p>
				{clientKey && tryAgain ? (
					<Button onClick={handleExecute} size="sm">
						Try another card
					</Button>
				) : (
					""
				)}
			</div>
		</>
	);
};
export default PaymentForm;

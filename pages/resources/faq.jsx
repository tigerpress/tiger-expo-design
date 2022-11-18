import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import Container from "../../components/container";
import List from "../../components/list";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import Title from "../../components/title";

const FaqPage = () => {
	return (
		<Section>
			<Container>
				<Title level="h1">FAQ</Title>

				<Title level="h2" className="mt-9">
					Is there a minimum order?
				</Title>
				<Paragraph>
					Yes & No. We can print you one or very few boxes for samples, but the cost those few boxes
					would most likely be higher than your product itself. A few samples custom boxes would
					range from $50 to $300. A short run custom box would need a minimum of 100-1000 custom
					boxes to make it cost efficient to use for the actual product.
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					How do I measure the length, width, and depth of my product box?
				</Title>
				<Paragraph>
					With the box open toward you, here&apos;s how to get the correct measurements for the
					inside of the box:
				</Paragraph>
				<List
					style="ul"
					indent
					items={[
						"The length is measured from the left to ride side of the box",
						"The width is measured from the front to the back side of the box",
						"The depth (or height) is measured from the top to the bottom of the box",
					]}
				/>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					How do I ensure my artwork fits correctly on my Custom Box?{" "}
				</Title>
				<Paragraph>
					We will provide you with a die-line and information as to how to place your artwork. We
					will double check to make sure your supplied artwork fits correctly on your Custom Box,
					and we can provide you with a proof for you to approve.
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					Is my artwork checked for errors and technical issues such as image resolution?{" "}
				</Title>
				<Paragraph>
					Yes, your artwork will be checked by one of our computer specialists for accuracy and
					quality. Any concern will be brought to your attention and you will be provided an
					opportunity to correct the problems before printing.
				</Paragraph>
			</Container>
		</Section>
	);
};

export default FaqPage;

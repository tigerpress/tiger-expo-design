import Container from "../../components/container";
import List from "../../components/list";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import Title from "../../components/title";

const FileInstructionsPage = () => {
	return (
		<Section>
			<Container>
				<Title level="h1">File Package Instructions</Title>

				<Title level="h2" className="mt-9">
					Adobe InDesign
				</Title>
				<Paragraph>
					Adobe InDesign files need to be packaged in order to be sure all the required elements are
					available.
				</Paragraph>
				<List
					style="ol"
					indent
					items={[
						"Open your INDD file in InDesign.",
						"If possible, resolve any errors concerning missing links or fonts.",
						"Go to File: Package.",
						"Click the Package button at the bottom of the Summary window (This window was called the preflight window in older versions).",
						"Click continue on the “Printing Instructions” window (most people ignore these instructions).",
						"Browse to where you’d like to create the package folder (desktop would be fine) and enter the name of the folder.",
						"Make sure that the “Copy Fonts,” “Copy Linked Graphics,” “Update Graphic Links in Package,” and “Include Fonts and Links from Hidden….” are all checked. Other boxes should be unchecked.",
						"Click the package button.",
						"Find the new folder that InDesign created and verify that it contains copies of all required files.",
						"Right click the folder and choose 'Compress' (Mac) or 'Send to ZIP' (Windows). This will set the file to be a format suitable for uploading on the web.",
					]}
				/>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Adobe Illustrator
				</Title>
				<Paragraph>
					Illustrator files need to be packaged in order to be sure all the required elements are
					available. As an alternative to the instructions below you may also convert all text to
					paths and embed any linked graphics.
				</Paragraph>
				<List
					style="ol"
					indent
					items={[
						"Open your AI file in Illustrator.",
						"If possible, resolve any errors concerning missing links or fonts.",
						"Go to File: Package.",
						"Select all the check boxes.",
						"Browse to where you’d like to create the package folder (desktop would be fine) and enter the name of the folder.",
						"Click the PACKAGE button.",
						"Find the new folder that Illustrator created and verify that it contains copies of all required files.",
						"Right click the folder and choose 'Compress' (Mac) or 'Send to ZIP' (Windows). This will set the file to be a format suitable for uploading on the web.",
					]}
				/>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Quark XPress
				</Title>
				<Paragraph>
					QuarkXPress files need to be packaged in order to be sure all the required elements are
					available.
				</Paragraph>
				<List
					style="ol"
					indent
					items={[
						"Open your QXP file in QuarkXPress.",
						"If possible, resolve any errors concerning missing links or fonts.",
						"Go to File: Collect for output.",
						"Select all the check boxes EXCEPT report only.",
						"Browse to where you’d like to create the package folder (desktop would be fine) and enter the name of the folder.",
						"Click the SAVE button.",
						"Find the new folder that QuarkXPress created and verify that it contains copies of all required files.",
						"Right click the folder and choose 'Compress' (Mac) or 'Send to ZIP' (Windows). This will set the file to be a format suitable for uploading on the web.",
					]}
				/>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Microsoft Publisher
				</Title>
				<Paragraph>
					Publisher files need to be packaged in order to be sure all the required elements are
					available.
				</Paragraph>
				<List
					style="ol"
					indent
					items={[
						"Open your PUB file in Publisher",
						"Go to File: Pack and Go: Take to a Commercial Printing Service",
						"If possible, resolve any errors concerning missing links or fonts.",
						"Click the SAVE button.",
						"Browse to where",
						"Browse to where you’d like to create the package folder (desktop would be fine) and enter the name of the folder.",
						"Click the FINISH button.",
						"Find the new folder that Publisher created and verify that it contains copies of all required files.",
						"Right click the folder and choose 'Compress' (Mac) or 'Send to ZIP' (Windows). This will set the file to be a format suitable for uploading on the web.",
					]}
				/>
			</Container>
		</Section>
	);
};

export default FileInstructionsPage;

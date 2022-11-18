import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import Title from "../../components/title";

const TipsPage = () => {
	return (
		<Section>
			<Container>
				<Title level="h1">Tips and Tricks</Title>
				<Title level="h2" className="mt-9">
					Resolution / Scanning
				</Title>
				<Paragraph>
					The recommended final resolution of scanned color or grayscale images is 300 dpi. Line art
					should be 600 dpi. Internet graphics are usually 72 dpi and produce low quality offset
					print graphics.
					<br />
					Use the .TIF format for all scanned images. LZW compression can be applied.
					<br />
					If you will be enlarging images after scanning, be sure to use the scaling factor. For
					example, if your artwork is one inch by one inch and you want to double the size on your
					printed piece, scan at twice the resolution.? If final resolution desired is 300 dpi, scan
					at 600 dpi (600 = 2/1x300). Scan resolution = (final size / scan size) x final resolution
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					Document Size
				</Title>
				<Paragraph>
					Set your document page size to the final size of your printed page. Avoid manually drawn
					crop marks. Extend bleeds 1/8&quot; past page edges. Be sure to keep non-bleeding items at
					least 1/&quot; from any edge or bindery operation. Never put two pages together on one
					page as a spread. This will result in significant extra charges.
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					Spot Color Documents
				</Title>
				<Paragraph>
					Delete all unused colors in your documents, be sure the rest are defined as spot colors.
					Be sure the colors defined in your graphic files match those in the document. Print color
					separations to your laser printer and be sure all items print on the correct separation.
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					Process Color Documents
				</Title>
				<Paragraph>
					Delete all unused colors in your documents, make sure the rest are defined as process
					colors. Be sure all placed graphics are CMYK. Double check any embedded bitmaps.
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					Transparency
				</Title>
				<Paragraph>
					Our PDF native RIP can process transparent effects at high resolution and provide any
					required trapping. Remember that only PDF 6 and higher will correctly hold transparent
					objects without rasterizing them. Be sure to set the transparent blend space to CMYK. (In
					Illustrator you must set the document mode to CMYK)
				</Paragraph>

				<hr className="mt-4" />
				<Title level="h2" className="mt-9">
					Preflight Checks
				</Title>
				<Paragraph>
					TIger Expo Design highly recommends using a commercial preflight program to automate your
					preflight checks. Provide us with a full-size dummy, indicating any folds, perforations,
					or other information that we will need to finish your job. Make sure to include all
					graphic files used in your project. Use Quark&apos;s &quot;Picture Usage&quot; or
					Adobe&apos;s &quot;Links Manager&quot; to see what graphics are used. Include all fonts
					used in your project. Both screen and printer fonts are needed when using postscript
					fonts. Check to see if you have used any fonts in your .eps files. They will need to be
					converted to outlines before sending the graphic.
				</Paragraph>
			</Container>
		</Section>
	);
};

export default TipsPage;

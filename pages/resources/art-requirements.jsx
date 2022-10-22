import Link from "next/link";
import Button from "../../components/button";
import Container from "../../components/container";
import List from "../../components/list";
import Paragraph from "../../components/paragraph";
import Section from "../../components/section";
import Title from "../../components/title";

export default function ArtRequirementsPage() {
	return (
		<Section>
			<Container>
				<Title level="h1">Artwork Requirements</Title>

				<Title level="h2" className="mt-9">
					Supported Applications
				</Title>
				<Paragraph>
					All digital artwork should be submitted using one of the following applications:
				</Paragraph>

				<List
					style="ul"
					indent
					items={["Adobe Indesign", "Adobe Illustrator", "Quark XPress", "Adobe Acrobat (PDF)"]}
				/>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Application Settings
				</Title>
				<Paragraph>
					Files should be sized to the final page size of the project. You may select &quot;readers
					spreads&quot; to view your layout on screen, but please export single pages when creating
					a PDF. Be sure to properly configure the file for spot or process color, and include the
					supporting source files shown below. You may also want to visit our Tips and Tricks and
					Layout Guidelines pages for additional tips to prepare your file correctly.
				</Paragraph>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Resolution
				</Title>
				<Paragraph>
					The recommended photo resolution for offset production is 300dpi. Line art images should
					be 600dpi. There is no need to down-sample larger images unless they make it difficult for
					you to work with your document. TigerPress will flag any images under 200dpi for your
					review during the proofing process. Be sure to account for any scaling you apply in your
					layout application.
				</Paragraph>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Color Management
				</Title>
				<Paragraph>
					Please see our section on&nbsp;
					<Link href="/resources/color-management">
						<a>Color Management.</a>
					</Link>
				</Paragraph>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Supporting Documents
				</Title>
				<Paragraph>
					All digital artwork should be submitted using one of the following applications:
				</Paragraph>

				<dl className="mb-4">
					<dt className="mt-3 font-bold">Art</dt>
					<dd>
						Vector art files should be saved as encapsulated postscript (.EPS) files. Any embedded
						fonts should be converted to paths and any embedded bitmap files should be CMYK. Be sure
						to reference correct Pantone colors in your file for spot color jobs.
					</dd>
					<dt className="mt-3 font-bold">Bitmapped Art</dt>
					<dd>
						Bitmapped art files should be saved as .TIF or Photoshop .EPS files and may use LZW
						compression. Be sure to provide CMYK or Grayscale images. Duotones should reference the
						correct spot color. Avoid .JPG, .BMP, .GIF, .WMF, and .PICT files.
					</dd>
					<dt className="mt-3 font-bold">Fonts</dt>
					<dd>
						Adobe Type I, TrueType or OpenType fonts may be used. Be sure to include both screen and
						printer fonts if using Type I. Avoid Multiple Master fonts if possible. Any fonts
						embedded in .EPS files should be converted to paths.
					</dd>
				</dl>

				<hr className="my-4" />
				<Title level="h2" className="mt-9">
					Other File Formats
				</Title>
				<Paragraph>
					We understand that other applications can be used to create digital artwork. Though we
					recommend using Adobe InDesign, Adobe Illustrator, QuarkXpress and Adobe Acrobat PDF for
					your files, TigerPress will attempt to support any other applications and file formats
					that you provide. Please be advised that additional charges may apply.
				</Paragraph>

				<div className="mt-12">
					<Button>I need help!</Button>
				</div>
			</Container>
		</Section>
	);
}

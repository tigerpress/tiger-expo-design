import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
	const { productId } = req.query;
	const directory = path.join(process.cwd(), "data");
	const data = await JSON.parse(fs.readFile(directory + "/products.json", "utf8"));
	const product = data.find((product) => product.id === productId);
	console.log(product);
	res.status(200).send(product);
}

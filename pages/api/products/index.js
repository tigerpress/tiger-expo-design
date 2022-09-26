import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
	const directory = path.join(process.cwd(), "data");
	const data = await fs.readFile(directory + "/products.json", "utf8");
	res.status(200).send(data);
}

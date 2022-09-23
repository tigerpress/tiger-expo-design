import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductPage() {
	const router = useRouter();
	const { id } = router.query;
	const { data, error } = useSWR(`/api/product?estimate=${id}`);

	console.log(data);
	return (
		<div>
			{!data && !error && <p>Loading...</p>}
			{error && <p>An error occurred</p>}
			{data && (
				<div>
					<img src={`data:image/jpeg;base64, ${data.image}`} alt={data.product} />
				</div>
			)}
		</div>
	);
}

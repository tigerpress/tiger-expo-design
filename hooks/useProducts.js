import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useProducts() {
	const { data, error } = useSWR("/api/products", fetcher);
	return {
		products: data,
		loading: !error && !data,
		error,
	};
}

import useSWR from "swr";

export function useProducts() {
	const { data, error } = useSWR("/api/products");
	return {
		products: data,
		loading: !error && !data,
		error,
	};
}

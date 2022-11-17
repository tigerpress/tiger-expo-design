import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

function useTax(state) {
	const { data, error } = useSWR(`/api/tax/get?state=${state}`, fetcher);
	return {
		tax: data?.rate,
		loading: !error && !data,
		error,
	};
}

export { useTax };
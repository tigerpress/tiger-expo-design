import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

const useTax = (state) => {
	const { data, error } = useSWR(state ? `/api/tax/get?state=${state}` : null, fetcher);
	return {
		tax: data?.rate,
		loading: !error && !data,
		error,
	};
};

export { useTax };

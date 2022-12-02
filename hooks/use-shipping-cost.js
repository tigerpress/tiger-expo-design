import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

const useShippingCost = (estimate, zipcode) => {
	const { data, error } = useSWR(
		`/api/calculateship?estimate=${estimate}&zipcode=${zipcode}`,
		fetcher
	);
	return {
		shippingCost: data?.shippingCost,
		loading: !error && !data,
		error,
	};
};

export { useShippingCost };

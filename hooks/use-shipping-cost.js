import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

const useShippingCost = (estimate, zipcode) => {
	const { data, error } = useSWR(
		zipcode ? `/api/calculateship?estimate=${estimate}&zipcode=${zipcode}` : null,
		fetcher
	);
	return {
		shippingCost: data?.shippingCost,
		loading: !error && !data,
		error,
	};
};

export { useShippingCost };

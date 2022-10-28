import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		if (typeof window === "undefined") {
			return initialValue;
		} else {
			let existingItem = window.localStorage.getItem(key);
			return existingItem ? JSON.parse(existingItem) : initialValue;
		}
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [value, setValue]);

	return [value, setValue];
};

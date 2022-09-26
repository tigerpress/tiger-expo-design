// export async function fetcher(key) {
// 	const res = await fetch(process.env.NEXT_PUBLIC_API_URL + key, {
// 		headers: {
// 			authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_HEADER}`,
// 		},
// 	});

// 	if (!res.ok) {
// 		const error = new Error("An error occured while fetching data.");
// 		error.info = await res.json();
// 		error.status = res.status;
// 		throw error;
// 	}

// 	return res.json();
// }

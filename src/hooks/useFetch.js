import { useState, useEffect } from 'react';

export const useFetch = url => {
	const [data, setData] = useState(null),
		[error, setError] = useState(null),
		[loading, setLoading] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		const fetchData = async () => {
			setLoading(true);
			try {
				const fetchResponse = await fetch(url);

				if (!fetchResponse) {
					let error = new Error('Error en la petición Fetch');
					error.status = fetchResponse.status || '00';
					error.statusText = fetchResponse.statusText || 'Ocurrió un error';
					throw error;
				}

				const jsonResponse = await fetchResponse.json();

				if (!signal.aborted) {
					setData(jsonResponse);
					setError(null);
				}
			} catch (catchedError) {
				setData(null);
				setError(catchedError);
			} finally {
				if (!signal.aborted) {
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => abortController.abort();
	}, [url]);

	return { data, error, loading };
};

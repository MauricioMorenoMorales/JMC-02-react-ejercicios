import React, { useState } from 'react';

export const useForm = function (initialForm, validateForm) {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = event => {};
	const handleBlur = event => {};
	const handleSubmit = event => {};

	return {
		form,
		error,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

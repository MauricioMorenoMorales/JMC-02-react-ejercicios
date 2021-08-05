import React, { useState } from 'react';

export const useForm = function (initialForm, validateForm) {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = event => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};
	const handleBlur = event => {
		handleChange(event);
		setErrors(validateForm(form));
	};
	const handleSubmit = event => {};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

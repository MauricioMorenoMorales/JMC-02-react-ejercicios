import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

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
	const handleSubmit = event => {
		event.preventDefault();
		setErrors(validateForm(form));

		if (Object.keys(errors).length === 0) {
			setLoading(true);
			helpHttp()
				.post('https://formsubmit.co/el/xuduta', {
					body: form,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				})
				.then(postResponse => {
					setLoading(false);
					setResponse(true);
					setForm(initialForm);
					setTimeout(() => setResponse(false), 6000);
				})
				.catch(console.log);
		} else return;
	};

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

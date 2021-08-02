import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loader from './Loader';

import Message from './Message';

const SelectList = ({ title, url, handleChange }) => {
	const { data, error, loading } = useFetch(url);
	console.log(data, error, loading);

	if (!data) return null;
	if (error)
		return (
			<Message
				message={`Error ${error.status}: ${error.statusText}`}
				backgroundColor="#dc3545"
			/>
		);

	const id = `select-${title}`;
	const label = title.charAt(0).toUpperCase() + title.slice(1),
		singularTitle = title.replace(/s\b/, '');
	const options = data.response[title];
	console.log(options)

	return (
		<>
			<label htmlFor={id}>{label}</label>
			{loading && <Loader />}
			<select name={id} id={id} onChange={handleChange}>
				<option value="">Elige un {singularTitle}</option>
				{data &&
					options.map(element => {
						<option value={element}>{element}</option>;
					})}
			</select>
		</>
	);
};

export default SelectList;

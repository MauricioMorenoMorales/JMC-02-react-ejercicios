import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
	const [state, setState] = useState('');
	const [town, setTown] = useState('');
	const [suburb, setSuburb] = useState('');
	return (
		<div>
			<h2>Selects Anidados</h2>
			<h3>México</h3>
			<SelectList
				title="estados"
				url=""
				handleChange={event => {
					setState(event.target.value);
				}}
			/>
			{state && (
				<SelectList
					title="municipios"
					url=""
					handleChange={event => {
						setTown(event.target.value);
					}}
				/>
			)}
			{town && (
				<SelectList
					title="colonias"
					url=""
					handleChange={event => {
						setSuburb(event.target.value);
					}}
				/>
			)}
			<pre>
				<code>
					{state} - {town} - {suburb}
				</code>
			</pre>
		</div>
	);
};

export default SelectsAnidados;

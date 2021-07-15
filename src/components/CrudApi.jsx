import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
	const [db, setDb] = useState(null),
		[dataToEdit, setDataToEdit] = useState(null), // Is used in the <form /> and is activated on the component <crudTable />
		[error, setError] = useState(null),
		[loading, setLoading] = useState(true);

	const api = helpHttp();
	let url = 'http://localhost:3333/santos';

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then(res => {
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb(null);
					setError(res);
				}
			});
		setLoading(false);
	}, [url]);

	//Here you have the crud functions create update delete, but not get that is default
	//Create data inside the component <CrudForm />
	const createData = data => {
		data.id = Date.now();
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		}; //!||
		api.post(url, options).then(response => {
			console.log(response);
			if (!response.err) {
				setDb([...db, response]);
			} else {
				setError(response);
			}
		});
		setDb([...db, data]);
	}; //!||
	const updateData = data => {
		let newData = db.map(el => (el.id === data.id ? data : el));
		setDb(newData);
	}; //!||
	const deleteData = id => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id? ${id}`,
		);
		if (isDelete) {
			let newData = db.filter(el => el.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};

	return (
		<div>
			<br />
			<h2>CRUD API</h2>
			<article className="grid-1-2">
				<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
				{/* The crud form create and update the data */}
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				{loading && <Loader />}
				{error && (
					<Message
						message={`Error ${error.status}: ${error.statusText}`}
						backgroundColor="#dc3545"
					/>
				)}
				{/* CrudApi default function is get the data and store it in the component Crudtable */}
				{/* When they click on a button inside this component they call the two functions bellow  with the element and elemet.id*/}
				{db && (
					<CrudTable
						data={db}
						setDataToEdit={setDataToEdit}
						deleteData={deleteData}
					/>
				)}
			</article>
		</div>
	);
};

export default CrudApi;

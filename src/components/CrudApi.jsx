import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
	const [db, setDb] = useState(null),
		[dataToEdit, setDataToEdit] = useState(null),
		[error, setError] = useState(null),
		[loading, setLoading] = useState(false);

	let api = helpHttp();
	let url = 'http://localhost:3333/santos';

	useEffect(() => {
		setLoading(true);
		api.get(url).then(res => {
			console.log(res);
			if (!res.err) {
				setDb(res);
				setError(null);
			} else {
				setDb(null);
				setError(res);
			}
		});
		setLoading(false);
	}, []);

	const createData = data => {
		data.id = Date.now();
		setDb([...db, data]);
	};
	const updateData = data => {
		let newData = db.map(el => (el.id === data.id ? data : el));
		setDb(newData);
	};
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
			<h2>CRUD API</h2>
			<article className="grid-1-2">
				<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				{loading && <Loader />}
				{error && <Message />}
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

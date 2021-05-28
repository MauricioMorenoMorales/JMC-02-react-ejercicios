import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
	{
		id: 1,
		name: 'Seiya',
		constellation: 'Pegaso',
	},
	{
		id: 2,
		name: 'Shiryu',
		constellation: 'Dragón',
	},
	{
		id: 3,
		name: 'Hyoga',
		constellation: 'Cisne',
	},
	{
		id: 4,
		name: 'Shun',
		constellation: 'Andromeda',
	},
	{
		id: 5,
		name: 'Ikki',
		constellation: 'Fenix',
	},
];

const CrudApi = () => {
	const [db, setDb] = useState([]);
	const [dataToEdit, setDataToEdit] = useState(null);

	let api = helpHttp();
	let url = 'http://localhost:3333/santos';

	useEffect(() => {
		api.get(url).then(res => {
			if (!res.err) {
				setDb(res);
			} else {
				setDb([]);
			}
		});
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
			<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			/>
			<CrudTable
				data={db}
				setDataToEdit={setDataToEdit}
				deleteData={deleteData}
			/>
		</div>
	);
};

export default CrudApi;

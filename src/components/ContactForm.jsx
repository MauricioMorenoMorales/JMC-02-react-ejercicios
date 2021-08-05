import React from 'react';
import { useForm } from '../hooks/useForm';

const initialForm = {};
const validationsForm = form => {};

const ContactForm = () => {
	const {
		form,
		error,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useForm(initialForm, validationsForm);

	return (
		<div>
			<h2>Formulario de contacto</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Escribe tu nombre"
					onChange={handleChange}
					value={form.name}
					onBlur={handleBlur}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Escribe tu email"
					onChange={handleChange}
					value={form.email}
					onBlur={handleBlur}
					required
				/>
				<input
					type="text"
					name="subject"
					placeholder="Asunto a tratar"
					onChange={handleChange}
					value={form.subject}
					onBlur={handleBlur}
					required
				/>
				<textarea
					name="comments"
					cols="50"
					rows="5"
					placeholder="Escribe tus comentarios"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.comments}
				></textarea>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default ContactForm;

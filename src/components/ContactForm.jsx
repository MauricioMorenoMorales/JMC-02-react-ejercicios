import React from 'react';
import { useForm } from '../hooks/useForm';

const initialForm = {
	name: '',
	email: '',
	subject: '',
	comments: '',
};

const styles = {
	fontWeight: 'bold',
	color: '#dc3545',
};

const validationsForm = form => {
	let errors = {};
	const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
		regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
		regexComments = /^.{1,255}$/;

	if (!form.name.trim()) {
		errors.name = "El campo 'Nombre' es requerido.";
	} else if (!regexName.test(form.name.trim())) {
		errors.name = "El campo 'Nombre' sóo acepta letras y espacios en blanco";
	}

	if (!form.email.trim()) {
		errors.email = "El campo 'Email' es requerido.";
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = "El campo 'Email' es incorrecto";
	}

	if (!form.subject.trim()) {
		errors.subject = "El campo 'Asunto' es requerido.";
	}

	if (!form.comments.trim()) {
		errors.comments = "El campo 'Comentarios' es requerido.";
	} else if (!regexComments.test(form.comments.trim())) {
		errors.comments =
			"El campo 'Comentarios' no debe exceder los 255 caracteres";
	}

	return errors;
};

const ContactForm = () => {
	const {
		form,
		errors,
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
				{errors.name && <p style={styles}>{errors.name}</p>}
				<input
					type="email"
					name="email"
					placeholder="Escribe tu email"
					onChange={handleChange}
					value={form.email}
					onBlur={handleBlur}
					required
				/>
				{errors.email && <p style={styles}>{errors.email}</p>}
				<input
					type="text"
					name="subject"
					placeholder="Asunto a tratar"
					onChange={handleChange}
					value={form.subject}
					onBlur={handleBlur}
					required
				/>
				{errors.subject && <p style={styles}>{errors.subject}</p>}
				<textarea
					name="comments"
					cols="50"
					rows="5"
					placeholder="Escribe tus comentarios"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.comments}
				></textarea>
				{errors.comments && <p style={styles}>{errors.comments}</p>}
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default ContactForm;

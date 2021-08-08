import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import ContactForm from './ContactForm';

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false),
		[isOpenModal2, openModal2, closeModal2] = useModal(false),
		[isOpenModal3, openModal3, closeModal3] = useModal(false),
		[isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);
	return (
		<div>
			<h2>Modales</h2>
			<button onClick={openModal1}>Modal 1</button>
			<Modal isOpen={isOpenModal1} closeModal={closeModal1}>
				<h3>Modal numero 1</h3>
				<p>Hola este es el contenido de mi modal 1</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>
			<button onClick={openModal2}>Modal 2</button>
			<Modal isOpen={isOpenModal2} closeModal={closeModal2}>
				<h3>Otro Modal</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
					aliquam quia eligendi in laborum, blanditiis dicta atque sunt
					temporibus laudantium, quis saepe! Quaerat omnis dolorum quas
					cupiditate, architecto quos maiores.
				</p>
				<img src="https://placeimg.com/400/400/nature" alt="Nature" />
			</Modal>
			<button onClick={openModal3}>Modal 3</button>
			<Modal isOpen={isOpenModal3} closeModal={closeModal3}>
				<ContactForm />
			</Modal>
			<button onClick={openModalPortal}>Open Modal Portal</button>
			<Modal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
				<h3>Este es un modal con portales</h3>
				<p>
					Este es el contenido de un modal que carga en otro nodo de el DOM
					diferente a donde carga nuestra app de React, gracias a los React
					Portal.
				</p>
				<img src="https://placeimg.com/400/400/tech" alt="Technology" />
			</Modal>
		</div>
	);
};

export default Modals;

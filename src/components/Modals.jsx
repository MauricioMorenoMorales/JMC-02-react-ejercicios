import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1 ] = useModal(false)
	const [isOpenModal2, openModal2, closeModal2 ] = useModal(false)
	return (
		<div>
			<h2>Modales</h2>
			<button>Modal 1</button>
			<Modal>
				<h3>Modal numero 1</h3>
				<p>Hola este es el contenido de mi modal 1</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>
			<button>Modal 2</button>
			{/* <Modal>
				<h3>Otro Modal</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
					aliquam quia eligendi in laborum, blanditiis dicta atque sunt
					temporibus laudantium, quis saepe! Quaerat omnis dolorum quas
					cupiditate, architecto quos maiores.
				</p>
				<img src="https://placeimg.com/400/400/nature" alt="Nature" />
			</Modal> */}
		</div>
	);
};

export default Modals;

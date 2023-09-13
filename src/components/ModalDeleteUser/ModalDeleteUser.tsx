import React, { useState } from 'react';
import './ModalDeleteUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPen } from '@fortawesome/free-solid-svg-icons';

export type ModalDeleteUserProps = {
	typeAction: number
}

const ModalDeleteUser: React.FC<ModalDeleteUserProps> = ({ typeAction }) => {
	const [showAlert, setShowAlert] = useState();


	return <>
		<button title='Editar Usuario'><FontAwesomeIcon icon={faUserPen} className='h-4' /></button>
		<button title='Gestionar Subscripción'><FontAwesomeIcon icon={faPlus} className='h-4' /></button>
	</>;
};

export default ModalDeleteUser;

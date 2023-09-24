import React, { useState } from 'react';
import './GestionUsuarioSysView.css';

export type GestionUsuarioSysViewProps = {
}

const GestionUsuarioSysView: React.FC<GestionUsuarioSysViewProps> = ({ }) => {
	const [isDisabled, setDisabled] = useState(false);
	return (
		<>
			<div className='flex flex-col p-2'>

			</div>
		</>
	);
};

export default GestionUsuarioSysView;

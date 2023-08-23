import React from 'react';
import './CantAccess.css';

export type CantAccessProps = {
}

const CantAccess: React.FC<CantAccessProps>  = ({}) => {
	return <div className='container-fluid'>
		<div className='flex justify-center items-center'>
			<h1>No cuentas con acceso a este módulo</h1>
		</div>
	</div>;
};

export default CantAccess;

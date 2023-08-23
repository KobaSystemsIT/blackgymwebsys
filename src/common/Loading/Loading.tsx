import React from 'react';
import './Loading.css';

export type LoadingProps = {
}

const Loading: React.FC<LoadingProps> = ({ }) => {
	return <>
		<div className='flex h-screen justify-center items-center'>
			<h1 className='text-7xl'>
				<span className="loading loading-infinity loading-lg"></span>
			</h1>
		</div>
	</>;
};

export default Loading;

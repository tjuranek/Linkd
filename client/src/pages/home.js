import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
	const isLoaded = useSelector(state => state.app.isLoaded);

	return (
		<div>
			{process.env.API_URL}
			<p>{isLoaded.toString()}</p>
		</div>
	);
};

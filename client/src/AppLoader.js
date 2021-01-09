import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const AppLoader = props => {
	const { loadingComponent, minimumLoadingTime } = props;
	const isReady = useSelector(state => state.app.isLoaded);

	const [minimumDurationPassed, setMinimumDurationPassed] = useState(
		minimumLoadingTime == 0
	);

	useEffect(() => {
		setTimeout(() => setMinimumDurationPassed(true), minimumLoadingTime);
	}, []);

	if (isReady && minimumDurationPassed) {
		return props.children;
	}

	return loadingComponent;
};

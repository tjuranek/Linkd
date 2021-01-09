import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

export const AppLoader = props => {
	const { minimumLoadingTime } = props;
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

	return <LinearProgress />;
};

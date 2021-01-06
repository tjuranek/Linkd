import React, { useEffect, useState } from 'react';

export const AppLoader = props => {
	const { loadingComponent, minimumLoadingTime } = props;

	const [minimumDurationPassed, setMinimumDurationPassed] = useState(
		minimumLoadingTime == 0
	);

	useEffect(() => {
		setTimeout(() => setMinimumDurationPassed(true), minimumLoadingTime);
	}, []);

	if (!minimumDurationPassed) {
		return loadingComponent;
	}

	return props.children;
};

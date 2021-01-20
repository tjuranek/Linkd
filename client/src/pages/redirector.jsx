import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLinkByKey } from '../store/ducks/link';
import { createStatistic } from '../store/ducks/statistics';

export const Redirector = () => {
	const dispatch = useDispatch();
	const { key } = useParams();
	const link = useSelector(state => state.links.lastRetrievedLink.url);

	useEffect(() => {
		dispatch(createStatistic(key));
		dispatch(getLinkByKey(key));
	}, []);

	useEffect(() => {
		if (link) {
			// using replace here so hitting the back button doesn't cause the redirect
			// again. if the link doesn't include the web protocal prepent it with
			// two slashes
			//window.location.replace(!link.includes('//') ? '//' + link : link);
			alert('got it');
		}
	}, [link]);

	return null;
};

import axios from 'axios';

export const post = async (url, data) => {
	const a = await axios({
		method: 'post',
		url: url,
		data: data
	});

	debugger;
};

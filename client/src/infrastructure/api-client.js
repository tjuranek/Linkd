import axios from 'axios';

export const post = async (url, data) => {
	try {
		const response = await axios({
			method: 'post',
			url: url,
			data: data
		});
		return response.data.token;
	} catch (error) {
		console.log(error);
		return undefined;
	}
};

import sendgrid from '@sendgrid/mail';

export const testEmail = async () => {
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

	const message = {
		to: 'thomas@juranek.com',
		from: 'dev@thomasjuranek.com',
		subject: 'SENDGRID TEST',
		text: 'this is some text',
		html: '<strong>strong text is better than non strong text</strong>'
	};

	try {
		await sendgrid.send(message);
	} catch (error) {
		throw error;
	}
};

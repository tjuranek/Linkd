import sendgrid from '@sendgrid/mail';

// TODO: look into sendgrid templates

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async html => {
	const message = {
		to: 'thomas@juranek.com',
		from: 'dev@thomasjuranek.com',
		subject: 'SENDGRID TEST',
		html
	};
	await sendgrid.send(message);
};

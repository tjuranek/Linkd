import mongoose from 'mongoose';

export const connectToDatabase = async () => {
	await mongoose.connect(process.env.MONGO_CONN_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
};

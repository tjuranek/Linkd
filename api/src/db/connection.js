import mongoose from 'mongoose';

export const connectToDatabase = async () => {
	await mongoose.connect(process.env.MONGO_CONN_STRING, {
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
};

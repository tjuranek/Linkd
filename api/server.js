import dotenv from 'dotenv';
import express from 'express';
import { connectToDatabase } from './src/db/connection.js';

// load .env values into process.env
dotenv.config();

// setup express app
const app = express();
app.use(express.json());

// create function to wait for database to connect before starting the app
const init = async () => {
	await connectToDatabase();
	app.listen(process.env.PORT);
};

// send ittttt
init();

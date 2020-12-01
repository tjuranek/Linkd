import dotenv from 'dotenv';
import express from 'express';
import { connectToDatabase } from './src/db/connection.js';
import { MainRouter } from './src/controllers/router.js';
import { logger } from './src/middleware/logger-middleware.js';

// load .env values into process.env
dotenv.config();

// setup express app
const app = express();
app.use(express.json());
app.use(logger);
app.use(MainRouter);

// create function to wait for database to connect before starting the app
const init = async () => {
	await connectToDatabase();
	app.listen(process.env.PORT);
};

// send ittttt
init();

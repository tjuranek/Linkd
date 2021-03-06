import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './src/db/connection.js';
import { MainRouter } from './src/controllers/router.js';
import { logger } from './src/middleware/logger-middleware.js';

// setup express app
const app = express();
app.use(cors());
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

// load enviornment variables
import dotenv from 'dotenv';
dotenv.config();

// setup express app
import express from 'express';
const app = express();
app.use(express.json());

// start application
app.listen(process.env.PORT, () =>
	console.log(`Server started on port ${process.env.PORT}`)
);

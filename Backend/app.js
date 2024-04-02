import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan'

import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRoute.js"

const app = express()
dotenv.config({path: './config/config.env'});
const corsOption = {
    origin: [`${process.env.FRONTEND_URL}`],
    methods: ["POST"],
    credentials: true,
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOption));
app.use(morgan('dev'));

const BASE_URL = "/api/v1"

// Import all routers
app.use(`${BASE_URL}/reservation`, router);
app.use(errorMiddleware);

export default app;

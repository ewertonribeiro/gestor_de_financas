import express from 'express';
import { routes } from './Routes/routes';
import { connectDB } from './db/connection/db';

const server = express();

const PORT = process.env.PORT || 5000;

connectDB()

server.use(express.json());

server.use(routes);

server.listen(PORT, () => console.log(`Server is Running at port : ${PORT}`));

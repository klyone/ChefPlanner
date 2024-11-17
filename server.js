import express from 'express';
import path from 'node:path';
import crypto from 'node:crypto';
import {routerFamily} from './routes/family.js';

const serverPort = process.env.PORT ?? 8080;

let server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/family', routerFamily);

server.get('/', (req, res) => {
    res.send("Hello World!");
});

server.listen(serverPort, () => {
    console.log("ChefPlanner server started!");
});

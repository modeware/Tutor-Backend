import express from 'express';
import './loadenv.js'
import pg from './db/connection.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Students!');
});

app.listen(3000, () => {
    console.log(`Listening on port: ${3000}`, process.env.PORT)
});
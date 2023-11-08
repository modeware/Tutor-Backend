import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Students!');
});

app.listen(3000, () => {
    console.log(`Listening on port: ${3000}`, process.env.PORT)
});
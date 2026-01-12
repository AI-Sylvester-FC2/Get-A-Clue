import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//import pkg from 'express';

//const { Request, Response } = pkg;

dotenv.config();

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/health', (_req, res) => {
    res.status(200).send('Server is running');
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
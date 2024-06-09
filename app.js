const express = require('express');
require('dotenv').config();

const path = require('path');
const app = express();
const port = 3000;

const { connectDB } = require('./src/config/db');
const router = require('./src/routes/route');

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', router);

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '/public/index.html'));
})

const start = async () => {
    try {
        await connectDB();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        return; 
    }

    try {
        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Error starting the server', err);
    }
}
start();
const express = require('express');
const connect = require('./config/database')
const app = express();

const PORT = 3000

const Tweet = require('./models/tweet')

const startServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server running at http://localhost:${PORT}`);

        console.log('Connecting to database...');
        await connect();
        console.log('connection established');

        const tweet = await Tweet.create({content : "Hello world"});
        console.log('Created tweet', tweet);
    });
};

startServer();
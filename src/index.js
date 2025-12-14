const express = require('express');
const connect = require('./config/database')
const app = express();

const PORT = 3000

const Tweet = require('./models/tweet')
const Comment = require('./models/comment')

const startServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server running at http://localhost:${PORT}`);

        console.log('Connecting to database...');
        await connect();
        console.log('connection established');

        // const tweet = await Tweet.create({content : "Hello world" , userEmail : "a@b.com"});

        // const tweet = await Tweet.find({userEmail : "a@b.com"})

        // const tweet = await Tweet.findById("693e794fc9e3bbc1c3d23e59");
        // tweet.userEmail = "b@c.com";
        // await tweet.save();

        // const tweet = await Tweet.create({content : "tweet with comments"});
        // const comment = await Comment.create({content : "comment content for tweet"});
        // tweet.comments.push(comment);//because its array
        // await tweet.save();

        // const tweet = await Tweet.findById("693ef5c94dcfba084b964612").populate({path : "comments"}).lean();//necessary to tell ref : in model
        
        // const tweet = await Tweet.find().skip(3).limit(1);
        // console.log(tweet[0].contentWithEmail); //-->Hello world is created by b@c.com     use of virtual contentWithEmail

        // const tweet = await Tweet.create({content : "Content with hooks"});      used prehook

        

        console.log(tweet);

    });
};

startServer();
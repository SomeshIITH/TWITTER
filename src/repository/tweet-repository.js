const Tweet = require('./models/tweet');

class TweetRepository{
    async createTweet(data){
        try{
            const tweet = await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log(`error in creating tweet ${error}`);
            throw error;
        }
    }

    async getTweet(tweetId){
        try{
            const tweet = await Tweet.findById(tweetId);
            return tweet;
        }catch(error){
            console.log(`error in getting tweet ${error}`);
            throw error;
        }
    }

    async getAllTweets(offset,limit){
        try{
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        }catch(error){
            console.log(`error in getting all tweets ${error}`);
            throw error;
        }
    }  
    
    async getTweetWithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate({path : "Comment"}).lean();//lean will stop converting into mongo object and it be js object
            return tweet;
        }catch(error){
            console.log(`error in getting tweet with comment ${error}`);
            throw error;
        }
    }

    async updateTweet(tweetId, data){
        try{
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new : true}); //new : true will return updated tweet ,else it will return old tweet
            return tweet;
        }catch(error){
            console.log(`error in updating tweet ${error}`);
            throw error;
        }
    }

    async deleteTweet(tweetId){
        try{
            const tweet = await Tweet.findByIdAndDelete(tweetId);
            return tweet;
        }catch(error){
            console.log(`error in deleting tweet ${error}`);
            throw error;
        }
    }
}

module.exports = TweetRepository;
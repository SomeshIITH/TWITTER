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

    async getAllTweets(){
        try{
            const tweets = await Tweet.find();
            return tweets;
        }catch(error){
            console.log(`error in getting all tweets ${error}`);
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
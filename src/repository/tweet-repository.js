import CrudRepository  from "./crud-repository.js";
import Tweet from "../models/tweet.js"

class TweetRepository extends CrudRepository{ 
    constructor(){
        super(Tweet);
    }
    async findTweetWithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate({path : "comments"});//lean will stop converting into mongo object and it be js object
            return tweet;   //.populate is used to get the comments of the tweet from its id
        }catch(error){
            console.log(`error in getting tweet with comment ${error}`);
            throw error;
        }
    }

    async findTweetWithLikes(id){
        try{
            const tweet = await Tweet.findById(id).populate({path : "likes"});//lean is giving js object but as we need manipulation we need mongoose object
            return tweet;
        }catch(error){
            console.log(`error in getting tweet with likes ${error}`);
            throw error;
        }
    }
}

export default TweetRepository;
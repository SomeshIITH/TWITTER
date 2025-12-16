import {TweetService} from './../services/index.js';

const tweetService = new TweetService();

export const createTweet = async (req,res)=>{
    try{
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            message : "Tweet created successfully",
            data : response,
            err : {},
            success : true
        });
    }catch(error){
        console.log(`error in tweet controller create tweet ${error}`);
        return res.status(500).json({
            message : "Internal server error",
            err : error,
            success : false,
            data : {}
        });
    }
}

export const getTweet = async (req,res)=>{
    try{
        const tweetId = req.params.id;
        const response = await tweetService.get(tweetId);
        return res.status(200).json({
            message : "Tweet fetched successfully",
            data : response,
            err : {},
            success : true
        });
    }catch(error){
        console.log(`error in tweet controller get tweet ${error}`);
        return res.status(500).json({
            message : "Internal server error",
            err : error,
            success : false,
            data : {}
        });
    }
}

// export default {
//     createTweet , getTweet
// }
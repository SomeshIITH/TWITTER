import { LikeRepository,CommentRepository,TweetRepository } from "./../repository/index.js";


class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        try{
            if(modelType == 'Tweet'){
                var likeable = await this.tweetRepository.findTweetWithLikes(modelId);
            }
            else if(modelType == 'Comment'){
                var likeable = await this.commentRepository.findCommentWithLikes(modelId);
            }
            else{
                throw new Error('Unknown model type , like can be done in Tweet or Comment only');
            }
            const exists = await this.likeRepository.findByUserAndLikeable({
                onModel : modelType,
                parentId : modelId,
                userId : userId
            });

            if(exists){
                //remove the like
                likeable.likes.pull(exists._id);
                await likeable.save();
                await exists.remove();
                var isAdded = false;
            }
            else{
                const newLike = await this.likeRepository.create({
                    onModel : modelType,
                    parentId : modelId,
                    userId : userId
                });
                likeable.likes.push(newLike._id);
                await likeable.save();
                var isAdded = true;
            }
            return isAdded;
        }catch(error){
            console.log(`error in like service toggle like ${error}`);
            throw error;
        }
    }
}

export default LikeService;
import { CommentRepository,TweetRepository } from "../repository/index.js";

class CommentService{
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(content, userId,modelType,modelId){
        try{
            if(modelType == "Tweet"){
                var commentable = await this.tweetRepository.get(modelId);
            }
            else if(modelType == "Comment"){
                var commentable = await this.commentRepository.get(modelId);
            }
            else {
                throw new Error('Unknown model type , comment can be made on Tweet or Comment only');
            }
            const comment = await this.commentRepository.create({
                content : content,
                userId : userId,
                onModel : modelType,
                parentId : modelId,
                comments : []
            })
            commentable.comments.push(comment);
            await commentable.save();
            return comment;

        }catch(error){
            console.log(`error in comment service create comment ${error}`);
            throw error;
        }
    }
}

export default CommentService;
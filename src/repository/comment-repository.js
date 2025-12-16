import Comment from "./../models/comment.js"
import CrudRepository  from "./crud-repository.js"


class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }

    async findCommentWithLikes(id){
        try{
            const comment = await Comment.findById(id).populate({path : "likes"}).lean();
            return comment;
        }catch(error){
            console.log(`error in getting comment with likes ${error}`);
            throw error;
        }
    }
}

export default CommentRepository;
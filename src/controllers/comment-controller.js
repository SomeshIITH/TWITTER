import {CommentService} from "./../services/index.js";

export const createComment = async (req,res)=>{
    try{
        const commentService = new CommentService();
        const {modelType,modelId} = req.query;
        const {content,userId} = req.body;

        const comment = await commentService.createComment(content,userId,modelType,modelId);

        return res.status(201).json({
            message : 'Comment created successfully',
            data : comment,
            success : true
        });
    }catch(error){
        return res.status(500).json({
            message : 'Internal server error',
            data : {},
            success : false
        });
    }
}
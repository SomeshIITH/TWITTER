import {LikeService} from "./../services/index.js";

const likeService = new LikeService();

 export const toggleLike = async(req,res)=>{
    try{
        const modelId = req.query.modelId;
        const modelType = req.query.modelType;
        const userId = req.body.userId;

        const isAdded = await likeService.toggleLike(modelId,modelType,userId);

        return res.status(200).json({
            message : isAdded ? 'Like added successfully' : 'Like removed successfully',
            data : {
                isAdded : isAdded
            },
            success : true
        });
    }catch(error){

    }
}



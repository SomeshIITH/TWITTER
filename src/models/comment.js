import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    onModel : {
        type : String,
        required : true ,
        enum : ["Tweet" , "Comment"]  //to know whether the comment is on tweet or on comment
    },
    parentId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'   //refPath is used for dynamic referencing based on onModel field
    },
    content : {
        type : String,
        required : true
    },
    userId : {
        type :  String,
        required : true,
        ref : "User"
    },
    comments : [{       //required because comments can have comments
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
},{timestamps:true});

const Comment = mongoose.model('Comment',CommentSchema);

export default Comment;
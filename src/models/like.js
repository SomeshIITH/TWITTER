import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({},{timestamps : true});

const Like = mongoose.model('Like',LikeSchema);

export default Like;
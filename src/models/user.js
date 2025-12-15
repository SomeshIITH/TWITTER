import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
},{timestamps : true});  //timestamp will add createdAt and updatedAt

const User = mongoose.model('User',userSchema);
export default User;
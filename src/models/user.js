import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SALT,JWT_KEY} from './../config/serverConfig.js'

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

userSchema.pre('save',function(){
    const user = this;
    const encryptespassword = bcrypt.hashSync(user.password,SALT);
    user.password = encryptespassword;
})

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,thic.password);
}


//schema methods of mongoose
userSchema.methods.getToken = function(){
    return jwt.sign({id : this._id , email : this.email}, JWT_KEY, {
        expiresIn : '1d'
    })
}

const User = mongoose.model('User',userSchema);
export default User;
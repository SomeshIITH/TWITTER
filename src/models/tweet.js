const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        max : [250 , "Tweet cannot be more than 250 characters"]
    },
    userEmail : {
        type : String
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
},{timestamps : true});//timestamp will add createdAt and updatedAt

//using virtuals which allow to use getter and setters
// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} is created by ${this.userEmail}`;
// });

//using hook
tweetSchema.pre('save',function(){
    console.log("inside a hook");
    this.content = this.content + '....by hook'
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet
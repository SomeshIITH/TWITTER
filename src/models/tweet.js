const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    userEmail : {
        type : String
    }
},{timestamps : true});//timestamp will add createdAt and updatedAt

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet
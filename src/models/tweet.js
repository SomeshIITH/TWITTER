const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    userEmail : {
        type : String
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId
    }]
},{timestamps : true});//timestamp will add createdAt and updatedAt

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet
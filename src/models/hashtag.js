import mongoose from 'mongoose';

const hashingScheme = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    tweets : [      //required because hashtag can have many tweets
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Tweet"
        }
    ]
},{timestamps:true});

const Hashtag = mongoose.model('Hashtag',hashingScheme);
export default Hashtag;
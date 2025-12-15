import { TweetRepository,HashTagRepository} from "./../repository/index.js";

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository  = new HashTagRepository();
    }
    async create(data){
        try{
            const content = data.content;

            const tags = content.match(/#[a-zA-Z0-9_]+/g) || [];
            const formattedTags = tags.map(tag =>tag.substring(1).toLowerCase());
        
            const tweet = await this.tweetRepository.create(data);
        
            const alreadyExistingHashTags =await this.hashTagRepository.findByTag(formattedTags);
        
            const tagOfExistingHashTags =alreadyExistingHashTags.map(hashTag => hashTag.tag);
        
            const newTags =formattedTags.filter(tag => !tagOfExistingHashTags.includes(tag));
        
            const newHashTags = newTags.map(tag => ({tag,tweets: [tweet._id]}));
        
            await this.hashTagRepository.bulkCreate(newHashTags);
        
            alreadyExistingHashTags.forEach(hashTag => {
              hashTag.tweets.push(tweet._id);
              hashTag.save();
            });
        
            return tweet;
        }catch(error){
            console.log(`error in tweet service create ${error}`);
            throw error;
        }
    }

    async get(tweetId){
        try{
            const tweet = await this.tweetRepository.get(tweetId);
            return tweet;
        }catch(error){
            console.log(`error in tweet service get ${error}`);
            throw error;
        }
    }

    async getAll(offset=0,limit=0){
        try{
            const tweets = await this.tweetRepository.getAll(offset,limit);
            return tweets;
        }catch(error){
            console.log(`error in tweet service get all ${error}`);
            throw error;
        }
    }

    async bulkCreate(data){
        try{
            const tweets = await this.tweetRepository.bulkCreate(data);
            return tweets;
        }catch(error){
            console.log(`error in tweet service bulk create ${error}`);
            throw error;
        }
    }

    async destroy(tweetId){
        try{
            const tweet = await this.tweetRepository.destroy(tweetId);
            return tweet;
        }catch(error){
            console.log(`error in tweet service destroy ${error}`);
            throw error;
        }
    }
}

export default TweetService;
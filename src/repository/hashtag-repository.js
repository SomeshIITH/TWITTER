import Hashtag from "./../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashTagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }

    async findByTag(tags){
        try{
            const hashtag = await Hashtag.find({
                tag : tags
            })
            return hashtag;
        }catch(error){
            console.log(`error in finding hashtag by tag ${error}`);
            throw error;
        }
    }
}

export default HashTagRepository;


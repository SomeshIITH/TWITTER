import Hashtag from "./../models/hashtag.js";
import HashTag from "./../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashTagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }

    async findByTitle(title){
        try{
            const hashtag = await HashTag.findOne({
                title : title
            })
            return hashtag;
        }catch(error){
            console.log(`error in finding hashtag by title ${error}`);
            throw error;
        }
    }
}

export default HashTagRepository;


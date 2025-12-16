import User from "./../models/user.js"
import CrudRepository  from "./crud-repository.js"


class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findByEmail(email){
        try{
            const user = await User.findOne({email : email});
            return user;
        }catch(error){
            console.log(`error in finding user by email ${error}`);
            throw error;
        }
    }
}

export default UserRepository;
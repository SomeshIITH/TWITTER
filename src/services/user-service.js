import { UserRepository } from "./../repository/index.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {JWT_KEY} from './../config/serverConfig.js';


class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signUp(data){
        try{
            if(!(data.name && data.password && data.email)){
                throw Error('All fields(name,password,email) are required');
            }
            const user = await this.userRepository.create({
                name : data.name,
                password : data.password,
                email : data.email
            })
            return user;
        }catch(error){
            console.log(`error in user service sign up ${error}`);
            throw error;
        }
    }

    async signIn(data){
        try{
            const password = data.password;
            const user = await this.userRepository.findByEmail(data.email);
            if(!user){
                throw Error('User not found');
            }
            const isValidPassword =  bcrypt.compareSync(password,user.password);
            if(!isValidPassword){
                throw Error('Invalid password');
            }
            const jwttoken =  jwt.sign({id : user._id, email : user.email} ,JWT_KEY,{
                expiresIn : '1d'
            });
            return jwttoken;

            /* with help of schema methods of mongoose
            const isValidPassword = user.comparePassword(password);
            const jwttoken = user.getToken();
            */
        }catch(error){
            console.log(`error in user service sign in ${error}`);
            throw error;
        }
    }
}

export default UserService;
import {UserService} from './../services/index.js';
const userService = new UserService();


export const signUp = async(req,res)=>{
    try{
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const user = await userService.signUp({name,password,email});
        return res.status(200).json({
            message : "signup successfully",
            data : user,
            err : {},
            success : true
        })
    }catch(error){
        return res.status(500).json({
            data : {},
            message : "not able to signup",
            err : error,
            sucess : false
        })
    }
}

export const signIn = async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await userService.signIn({email,password});
        return res.status(200).json({
            message : "signin successfully",
            data : user,
            err : {},
            success : true
        })
    }catch(error){
        return res.status(500).json({
            data : {},
            message : "not able to signin",
            err : error,
            sucess : false
        })
    }
}
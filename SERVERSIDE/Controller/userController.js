import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



// get all user

export const getAllUser = async(req, res) =>{
  try {
    let users = await UserModel.find();
    users = users.map((user) =>{
        const {password, ...otherDetails} = user._doc
        return otherDetails
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}


//get user
 export const getUser = async(req,res) =>{
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id)
        if(user){
            const {password , ...otherDetail} = user._doc
            res.status(200).json(otherDetail)
        }else{y
            res.status(404).json('not such a user exists')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE USER
export const updateUser = async (req, res) =>{
    const id = req.params.id;
    const {_id, password} = req.body;
    if(id === _id){
    try {
     // password aupdate
     if(password){
        const salt =await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(password, salt);
     } 

       
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true},)
       const token = jwt.sign(
        {username: user.username, id: user._id},
        process.env.JWT_KEY,{ expiresIn:"1h"}
       )
        res.status(200).json(user, token)
     
    } catch (error) {
        res.status(500).json(error)
    }
    }else
    {
        res.status(403).json("access denied ! you can update only authenticate user")
       }//  not show error

  };

  //user deleted

  export const deleteUser = async (req, res) =>{
    const id = req.params.id;
    const {_id, currentUserAdminStatus } = req.body;
    if(_id === id|| currentUserAdminStatus){
    try {
    
     await UserModel.findByIdAndDelete(id)
        res.status(200).json("user deleted successfully !")
     
    } catch (error) {
        res.status(500).json(error)
    }
    }else
    {
        res.status(403).json("access denied ! you can delete only authenticate user")
       }

  };

  // follow a user

  export const followUser = async(req, res) =>{
    const id = req.params.id;
    const {_id} = req.body;
    if(_id === id){
        res.status(403).json('Action forbidden')
    }
    try {
        const followUser =await UserModel.findById(id)
        const followingUser =await UserModel.findById(_id) 

        if(!followUser.followers.includes(_id)){
            await followUser.updateOne({$push: {followers:_id}})
            await followingUser.updateOne({$push: {following:id}})
            res.status(200).json("user followed!")
        }else{
            res.status(403).json("user has already followed by you!") 
        }
    } catch (error) {
        res.status(500).json(error) 
    }
  }

   // infollow a user

  export const unFollowUser = async(req, res) =>{
    const id = req.params.id;
    const {_id} = req.body;
    if(_id === id){
        res.status(403).json('Action forbidden')
    }
    try {
        const followUser =await UserModel.findById(id)
        const followingUser =await UserModel.findById(_id) 

        if(followUser.followers.includes(_id)){
            await followUser.updateOne({$pull: {followers:_id}})
            await followingUser.updateOne({$pull: {following:id}})
            res.status(200).json("user unFollowed!")
        }else{
            res.status(403).json("user is not  followed by you!") 
        }
    } catch (error) {
        res.status(500).json(error) 
    }
  }
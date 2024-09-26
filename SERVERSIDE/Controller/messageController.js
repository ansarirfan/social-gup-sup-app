import  MessageModel from '../Models/messageModels.js'

export const addMessage = async(req, res)=>{
    const {chatId, senderId, text} = req.body;
    const message = new MessageModel({
        chatId, senderId, text
    });
   try {
    const result = message.save();
    res.status(200).json(result)
   } catch (error) {
    res.status(2500).json(error)
   }
}


//get message

export const getMessage = async(req, res)=>{
    const {chatId} = req.params;
    
   try {
    const result = await MessageModel.findOne({chatId});
    res.status(200).json(result);
   } catch (error) {
    res.status(2500).json(error);
   }
}
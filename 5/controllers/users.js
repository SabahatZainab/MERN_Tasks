const namor = require('namor');
const User = require('../models')


exports.get = function(req,res){
  const query = req.query;
  User.findOne({user:query.user}).then((chat,err)=>{
      if(err) return res.status(400).json({
          success: false,
          message: "Error while getting chat"
      });
      if(chat){
          return res.status(200).json({
              success: true,
              data: chat,
              message: "Chat fetched successfully"
          })
      }
      return res.status(404).json({
          success: false,
          message:"Chat not found"
      });
  });
}

  exports.add = function(req,res){
    const body = req.body;
    const user = namor.generate({dictionary: "rugged"});
    const chat = new User({
        user: user,
        messages:  body.messages
    });
    chat.save();
    return res.status(200).json({
        success: true,
        data: chat,
        message: "Chats added successfully"
    });
}
exports.delete = function(req,res){
  const body = req.body;
  User.findOneAndDelete({user: body.user}).then((chat,err)=>{
      if(err) return res.status(400).json({
          success:false,
          message: "Error while deleting chat"
      });
      return res.status(200).json({
          success: true,
          data: chat,
          message: "chat deleted successfullt"
      });
  });
}
exports.update = function(req,res){
  const body = req.body;
  const user = namor.generate({dictionary: "rugged"});
  User.findOneAndUpdate(
      {user: body.oldUser},
      {messages: body.messages, user: user}).then(
          (chat,err) =>{
              if(err) return res.status(400).json({
                  success: false,
                  message: "Error while updating chat"
              });
              if(chat){
                  return res.status(200).json({
                      success: true,
                      data: chat,
                      message: "Chat updated successfully"
                  });
              }
              return res.status(404).json({
                  success: false,
                  message: "Chat unable to update"
              })
          });
}

exports.updateList = function(req,res){
  const body = req.body;
  User.findOneAndUpdate(
      {user: body.user},
      {$push: {messages: body.messages}}).then(
          (chat,err) =>{
              if(err) return res.status(400).json({
                  success: false,
                  message: "Error while updating chat"
              });
              return res.status(200).json({
                  success: true,
                  data: chat,
                  message: "Chat updated successfully"
              });
          });
}
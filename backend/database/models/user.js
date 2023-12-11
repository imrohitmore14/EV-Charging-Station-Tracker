const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,
    }, usercity:{
        type:String,
        required : true,
    }, 
     useremail:{
        type:String,
        required : true,
        unique:true
    }, 
    userpincode:{
        type:String,
        required:true,

    },
    userpassword:{
        type:String,
        required : true,
    }
},{timestamps:true})

const userModal = mongoose.model('users',userSchema);

module.exports = userModal;
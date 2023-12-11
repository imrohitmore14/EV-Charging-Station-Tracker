const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
   
     adminemail:{
        type:String,
        required : true,
        unique:true
    }, 
    adminpassword:{
        type:String,
        required : true,
    }
},{timestamps:true})

const adminModal = mongoose.model('admins',adminSchema);

module.exports = adminModal;
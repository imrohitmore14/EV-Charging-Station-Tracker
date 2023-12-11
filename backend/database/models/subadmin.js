const mongoose = require('mongoose');

const subadminSchema = new mongoose.Schema({
    subadminname:{
        type:String,
        required : true,
    }, subadminaddress:{
        type:String,
        required : true,
    }, subadmincity:{
        type:String,
        required : true,
    }, subadmindistrict:{
        type:String,
        required : true,
    },
     subadminemail:{
        type:String,
        required : true,
        unique:true
    }, 
    subadminpassword:{
        type:String,
        required : true,
    }
},{timestamps:true})

const subadminModal = mongoose.model('subadmins',subadminSchema);

module.exports = subadminModal;
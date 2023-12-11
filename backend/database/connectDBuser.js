const mongoose = require('mongoose');

 const connectToDbuser =  () =>{


    mongoose.connect('mongodb://localhost:27017/user').then(()=>{
        console.log('connected to db user')
    }).catch((err)=>{

        console.log(err);
    })
    

}


module.exports = connectToDbuser;
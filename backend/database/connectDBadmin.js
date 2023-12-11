const mongoose = require('mongoose');

 const connectToDbadmin =  () =>{


    mongoose.connect('mongodb://localhost:27017/admin').then(()=>{
       
    }).catch((err)=>{

        console.log(err);
    })
    

}


module.exports = connectToDbadmin;
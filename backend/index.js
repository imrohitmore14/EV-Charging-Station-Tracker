const express = require('express');
const connectToDb = require('./database/connectToDB');
const connectToDbadmin = require('./database/connectDBadmin');
const connectToDbuser = require('./database/connectDBuser');
const app = express();
const cors = require('cors');
const port = 4900;
app.use(express.json());
app.use(cors());
const adminModal=require('./database/models/admin')
const subadminModal = require('./database/models/subadmin')
const userModal = require('./database/models/user')

// connectToDbuser();
// connectToDbadmin();
connectToDb();


app.get('/',(req,res)=>{

    console.log('here');
    res.json("helllo server running ");
})

//Admin Privileges

app.post('/adminlogin',async (req,res)=>{  

    try{
        const body=req.body;
        const findadminemailpass= await adminModal.findOne({adminemail:body.adminemail,adminpassword:body.adminpassword});

        if(findadminemailpass){
            return res.json({success:true,message:'admin Login Successfully'})
        }else{
            return res.json({success:false,message:'Invalid Login'})
        }
    }catch(err){
    return res.json({success:false,message:err.message});
}
})

//User Privileges


app.post('/userregister',async (req,res)=>{

    try{
     console.log('in register user');
    const body = req.body;
    console.log(body); 
    const finduser = await userModal.findOne({useremail:body.useremail})
    if(finduser){
        return res.json({success:false,message:'User already exist'})
    }
    const user = await userModal.create(body);
    if(user){
        return res.json({success:true,user,message:"User successfully registered"});
    }
    else{
        return res.json({success:false,message:"something went wrong"});
    }
    }catch(err){
           return res.json({success:false,message:err.message});
    }
})

app.get('/populatecsstation', async (req, res) => {

    console.log('in request')
    try {
      // Finding a document where 'subadmincity' matches the value in the request headers
      const data = await subadminModal.find({ subadmincity: req.headers.subadmincity });
  
      // Logging the data to the console (for debugging purposes)
     
  
      // Sending the found data as a JSON response
      res.json({success:true,data});
    } catch (error) {
      // Handling errors and sending an internal server error response
      console.error('Error fetching data:', error);
      res.status(500).send({success:false,message:'Internal Server Error'});
    }
  });
  


app.post('/userlogin',async (req,res)=>{

    try{
        const body=req.body;
        console.log(body);
        const useremailpass= await userModal.findOne({useremail:body.useremail,userpassword:body.userpassword});
        console.log(useremailpass);
        if(useremailpass){
            return res.json({success:true,message:'user Login Successfully'})
        }else{
            return res.json({success:false,message:'Invalid Login'})
        }
    }catch(err){
    return res.json({success:false,message:err.message});
}
})

////Sub-Admin Privileges


app.post('/subadminregister',async (req,res)=>{

    try{
     console.log('in register subadmin');
    const body = req.body;
    console.log(body); 
    const findsubadmin = await subadminModal.findOne({subadminemail:body.subadminemail})
    if(findsubadmin){
        return res.json({success:false,message:'subadmin already exist'})
    }
    const subadmin = await subadminModal.create(body);
    if(subadmin){
        return res.json({success:true,subadmin,message:"subadmin successfully registered"});
    }
    else{
        return res.json({success:false,message:"something went wrong"});
    }

}catch(err){
    return res.json({success:false,message:err.message});
}
})

app.get('/subadminlogin/details', async (req, res) => {
    try {

    
      const data = await subadminModal.findOne({_id:req.headers.subadminid}); // Fetch all documents from the 'Subadmin' collection
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.post('/subadminlogin',async (req,res)=>{

    try{
        const body=req.body;
        console.log(body); 
        const findsubadminemailpass= await subadminModal.findOne({subadminemail:body.subadminemail,subadminpassword:body.subadminpassword});
        if(findsubadminemailpass){
            return res.json({success:true,message:'subadmin Login Successfully',id:findsubadminemailpass._id})
        }else{
            return res.json({success:false,message:'Invalid Login'})
        }
    }catch(err){
    return res.json({success:false,message:err.message});
}
})

app.get('/adminlogin/details', async (req, res) => {
    try {

    
      const data = await subadminModal.find(); // Fetch all documents from the 'Subadmin' collection
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.delete("/details/:subadmincity",async(request,response)=>{
    try {
        await subadminModal.deleteOne({"subadmincity":request.params.subadmincity});
        response.send({message:"DELETE_SUCCESS"});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:"ERROR_MESSAGE"});
    }
  
     
  });


  app.put('/updatecity',async (req,res)=>{

    try{
    const {city} = req.body;
    const id  = req.headers.id;

    const update = await subadminModal.findByIdAndUpdate({_id:id},{subadmincity:city});

    if(update){
       return res.json({success:true,message:"updated successfully"});
    }
    else{
        return res.json({success:false,message:"updated successfully"});
    }
}catch(err){
    console.log(err);
    return res.json({success:false,message:err.message});
}


   

  })

         


app.listen(port,()=>{
    console.log(`server runnning at  http://localhost:${port}`)
})








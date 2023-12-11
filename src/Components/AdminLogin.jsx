import { useState } from "react";
import { Container,Form,Button} from "react-bootstrap";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function AdminLogin() {

  const[adminemail,setadminEmail]=useState('');
  const[adminpassword,setadminPassword]=useState('');
  const navigate=useNavigate();
  const handleEmailChange = (e) => {
    setadminEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setadminPassword(e.target.value);
  }
  
  const login=async(e)=>{
    e.preventDefault();

    if(adminemail === 'admin@gmail.com' && adminpassword === 'admin'){
        //navigate to admin dashboard
        console.log('admin logged in')
        navigate("/adminlogin/details");
        
    }else{
      //alert
    }
    // const response=await fetch('http://localhost:4900/login',{
    //   method:"POST",
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body:JSON.stringify({adminemail,adminpassword})
    // })
    // const json=await response.json()
    // console.log(json)
  }
  


  return (
    <div className='d-flex justify-content-center align-items-center bg-white vh-100'>
       <div className='bg-success p-3 runded w-25'>
        <h2> Admin Login</h2>
     
      <Form onClick={(e) => login(e)} >
      <div className="mb-3 w-1/2">

          <label><strong>Email address</strong></label>
          <input
            type="email"
            className="form-control w-2"
            placeholder="Enter email"
            value={adminemail}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="mb-3">
          <label><strong>Password</strong></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={adminpassword}
            onChange={(e) => handlePasswordChange(e)}

          />
        </div>
        <Button variant="primary" type="submit">
         Login 
        </Button>
      </Form>


    </div>
    </div>


  );
}
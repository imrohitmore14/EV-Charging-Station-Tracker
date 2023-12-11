import { useState } from "react";
import { Container,Form,Button,Alert} from "react-bootstrap";
import { Link, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function SubadminLogin() {
  const navigate=useNavigate();
  const[subadminemail,setsubadminEmail]=useState('');
  const[subadminpassword,setsubadminPassword]=useState('');
  const [variant,setVariant] = useState('')
  const [alertMessage,setAlertMessage] = useState('');
  const handleEmailChange = (e) => {
    setsubadminEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setsubadminPassword(e.target.value);
  }
  
  const login=async(e)=>{
    
    e.preventDefault();
    const response=await fetch('http://localhost:4900/subadminlogin',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({subadminemail,subadminpassword})
    })
    const result=await response.json()
    console.log(result)
    if (result.success) {
      console.log(result.subadmin);
      setVariant('success');
      setAlertMessage(result.message);
      localStorage.setItem('subAdminId',result.id)
      console.log("subadmin Login successfully");
      navigate("/subadmin/details");
    } else {
      console.log(result.err);
      setVariant('danger');
      setAlertMessage(result.message);
    }
  }
  


  return (
    <>
      <Alert key={variant} variant={variant}>
         {alertMessage}
        </Alert>

    <Container className="container-sm mx-auto" >
       
        
        <div className='d-flex justify-content-center align-items-center bg-cyan vh-100'>
       
            <div className='bg-info p-3 runded w-25'>
          
        
            <h2>Subadmin-Login</h2>
      <Form  >
      <div className="mb-3 w-1/2">
          <label>Email address</label>
          <input
            type="email"
            className="form-control w-2"
            placeholder="Enter email"
            value={subadminemail}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={subadminpassword}
            onChange={(e) => handlePasswordChange(e)}

          />
        </div>
        <Button variant="primary" type="submit"onClick={(e)=>login(e)}>
         Login 
        </Button>
      </Form>
      </div>
      </div>


    </Container>
    </>


  );
}
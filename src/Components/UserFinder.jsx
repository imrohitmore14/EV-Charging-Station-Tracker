
import { useState } from "react";
import { Button, Container,Form } from "react-bootstrap";
export function UserFinder(){


  const [city,setCity] = useState("");
  const [data,setData] = useState([]);

  const findSubAdminByCity = async(e) =>{
      e.preventDefault();
    const response = await fetch('http://localhost:4900/populatecsstation',{
      method:'GET',
      headers:{
        'Content-type':'application/json',
        subadmincity : city
      }
    })

    const result = await response.json();

    if(result.success){
      setData(result.data)
    }else{
      setData([])
    }

  }
    return (
     <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
        
      </Form.Group>

     
      
      <Button variant="primary" type="submit" onClick={(e)=>findSubAdminByCity(e)}>
        Find
      </Button>
    </Form>


    {data.map((item)=>{
      return <h5>{item.subadminname}</h5>
    })}



    </>
             

      
       


    );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Button } from 'react';
// import Button from 'react-bootstrap/Button';
import { Button, Container } from 'react-bootstrap';

export function AdminDetails() {
  const [data, setData] = useState([]);

  const headers = {
    subadmincity: localStorage.getItem('subadmincity')
  };

  const handleDelete = async (subadmincity) => {
    try {
      console.log(subadmincity);
      const response = await axios.delete(`http://localhost:4900/details/${subadmincity}`);
      
      const updatedData = await fetchData();
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };


const handleUpdate = async (id)=>{

  const city = prompt('Enter the City')
;
console.log(city);
  const response = await fetch("http://localhost:4900/updatecity",{
    
    method:"PUT",
    headers:{
      'content-type':'application/json',
        id:id

    },
    body:JSON.stringify({city}),
  })

     const result = await response.json();
      if(result.success){
        console.log('uodated successfulply') ;
        fetchData().then((initialData) => setData(initialData)); 
      }else{
        console.log('something went wrong');
      }
    
}



  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4900/adminlogin/details', { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData().then((initialData) => setData(initialData));
  }, []);

  return (
    <div>
      <h1>Data of Subadmins :</h1>
      <br></br>

      <Container align="left" justify="center" className="p-3 runded w-25 mt-3  ml-5">
       <ol>
       {data.map(item => (
          <li key={item._id}>
            <h4>{item.subadminname}</h4>
             <strong>City : {item.subadmincity}</strong> <br></br><br></br>
             
            {/* Pass the correct property to the onClick handler */}
            <p>
              <Button variant="warning" onClick={() => handleDelete(item.subadmincity)}>Delete</Button>&nbsp;
              <Button variant="success" onClick={() => handleUpdate(item._id)}>Update</Button>
            </p>
            
            <br></br><br></br>
          </li>
        ))}
       </ol>
        
      
      </Container>
    </div>
  );

        }


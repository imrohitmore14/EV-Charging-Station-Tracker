import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SubadminDetails(){
    const [data, setData] = useState({});


    const headers ={
        subAdminId:localStorage.getItem('subAdminId')
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4900/subadminlogin/details',{headers}); // Replace with your actual API endpoint
          console.log(response);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 

  return (
    <div>
      <h1>Data of Subadmin:</h1>
      <ul> Name : {data.subadminname} </ul>
      <ul> Address : {data.subadminaddress}</ul> 
      <ul> City : {data.subadmincity}</ul>
      <ul> District : {data.subadmindistrict}</ul>
      <ul> Email : {data.subadminemail}</ul>
      <ul> Password : {data.subadminpassword}</ul>
      

     
    </div>
    );
}
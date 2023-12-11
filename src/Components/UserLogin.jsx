import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
//import Validation from './loginvalidation';

export function UserLogin(){



    const navigate = useNavigate();

    const [values,setValues]=useState({
        useremail:'',
        userpassword:''
    })

    const [errors,setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev=>({...prev,[event.target.name]:event.target.value}))
    }

    const handleSubmit =async(event)=>{
        event.preventDefault();
        

        console.log(values);
        const response = await fetch('http://localhost:4900/userlogin', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(values)
          })

          const json = await response.json();
        //   navigate.
        navigate("/populatecsstation");
          console.log(json);
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 runded w-25'>
            <h2>Sign-in</h2>
                <form action="" onSubmit={handleSubmit} >
                    <div className='mb-3'>
                        <label htmlfor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='enter email'name='useremail'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlfor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='enter password'name='userpassword'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                    <p>Please agree to our terms and condition</p>
                    {/* <Link to="signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link> */}

                    
                </form>
            </div>

        </div>
    )
}


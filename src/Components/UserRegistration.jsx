import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
//import Validation from './SignupValidation';

export function UserRegistration() {
    const [values, setValues] = useState({
        username: '',
        useremail: '',
        userpassword: '',
        usercity:'',
        userpincode:'',
    })

    const [errors,setErrors]=useState({})


    const handleInput = (event) =>{

        const {name,value} = event.target
        console.log(name,value);
        setValues(prev=>({...prev,[name]:value}))
        console.log(values);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
       // setErrors(Validation(values));

        console.log(values);
        // return ;

       const response = await fetch('http://localhost:4900/userregister', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const result = await response.json();

      console.log(result);
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
            <div className='bg-white p-3 runded w-25'>
                <h2>Sign-up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlfor="name"><strong>Name</strong></label>
                        <input type="text" onChange={handleInput} placeholder='enter name' name='username'
                        className='form-control rounded-0'/>
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlfor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='enter email' name='useremail'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                        
                   </div>

                    <div className='mb-3'>
                        <label htmlfor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='enter password' name='userpassword' 
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlfor="city"><strong>City</strong></label>
                        <input type="text" placeholder='enter cityname' onChange={handleInput} name="usercity" className='form-control rounded-0'/>
                        {errors.city && <span className='text-danger'> {errors.city}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlfor="pincode"><strong>Pincode</strong></label>
                        <input type="number" placeholder='enter pincode' onChange={handleInput} name="userpincode" className='form-control rounded-0'/>
                        {errors.pincode && <span className='text-danger'> {errors.pincode}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Signup</button>
                    <p>Please agree to our terms and condition</p>
                    {/* <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>

                     */}
                </form>
            </div>

        </div>
    )
}


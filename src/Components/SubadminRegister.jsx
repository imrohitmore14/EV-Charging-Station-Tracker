import { Container, Alert } from "react-bootstrap";
import { useState } from "react";

export function SubadminRegister() {


  const [subadminname, setsubadminName] = useState('');
  const [subadminaddress, setsubadminAddress] = useState('');
  const [subadmincity, setsubadminCity] = useState('');
  const [subadmindistrict, setsubadminDistrict] = useState('');
  const [subadminemail, setsubadminEmail] = useState('');
  const [subadminpassword, setsubadminPassword] = useState('');
  const [variant, setVariant] = useState('')
  const [alertMessage, setAlertMessage] = useState('');

  const handleNameChange = (e) => {
    setsubadminName(e.target.value);
  }
  const handleAddressChange = (e) => {
    setsubadminAddress(e.target.value);
  }
  const handleCityChange = (e) => {
    setsubadminCity(e.target.value);
  }
  const handleDistrictChange = (e) => {
    setsubadminDistrict(e.target.value);
  }



  const handleEmailChange = (e) => {
    setsubadminEmail(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setsubadminPassword(e.target.value);
  }

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4900/subadminregister', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ subadminname, subadminaddress, subadmincity, subadmindistrict, subadminemail, subadminpassword })
    })


    const result = await response.json();
    console.log("result", result);
    if (result.success) {
      console.log(result.subadmin);
      setVariant('success');
      setAlertMessage(result.message);
      console.log("subadmin register successfully");
    } else {
      console.log(result.err);
      setVariant('danger');
      setAlertMessage(result.message);
    }

  }

  return (
    <Container>

      <Alert key={variant} variant={variant}>
        {alertMessage}
      </Alert>

      <div className='d-flex justify-content-center align-items-center bg-white vh-100' >

        <div className='bg-success p-3 runded w-25'>
          <form >
            <h3>Register For Subadmin</h3>
            <div className="mb-3">
              <label>Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={subadminname}
                onChange={(e) => handleNameChange(e)}
              />
            </div>
            <div className="mb-3">
              <label>Address </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                value={subadminaddress}
                onChange={(e) => handleAddressChange(e)}
              />
            </div>
            <div className="mb-3">
              <label>City </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={subadmincity}
                onChange={(e) => handleCityChange(e)}
              />
            </div>
            <div className="mb-3">
              <label>District </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter District"
                value={subadmindistrict}
                onChange={(e) => handleDistrictChange(e)}
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
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
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="e-grid">
              <button type="submit" className="btn btn-primary" onClick={(e) => register(e)} >
                Register
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot password?
            </p>
          </form>
        </div>


      </div>

    </Container>


  );
}
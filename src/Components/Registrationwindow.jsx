
import { Button, Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserRegistration } from "./UserRegistration";
import { SubadminRegister } from "./SubadminRegister";
export function Registrationwindow() {
    return (
        <Container className="align-center justify-center"> 
            <br/>
           <Stack gap={3} align="center" justify="center" className="mt-5 ml-5"> 
            <div><Link to='/userregister'><Button>User Registration</Button></Link></div>
            <div> <Link to='/subadminregister'><Button>Subadmin Registration</Button></Link></div>
            </Stack>
        </Container>





    );
}
import { Link } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
export function Loginwindow(){
    return(
        
        <Container className='p-3 runded w-25 mt-5'>
            <Stack gap={3} align="center" justify="center" className="mt-5 ml-5" >
                <div className="p-2"><Link to='/userlogin'><Button>User Login</Button></Link></div>
                <div className="p-2"><Link to='/subadminlogin'><Button>Subadmin Login</Button></Link></div>
                <div className="p-2"><Link to='/adminlogin'><Button>Admin Login</Button></Link></div>
            </Stack>
            {/* <Link to='/userlogin'><Button>User Login</Button></Link>
            <br/><br/>
            <Link to='/subadminlogin'><Button>Subadmin Login</Button></Link>
            <br/><br/>
            <Link to='/adminlogin'><Button>Admin Login</Button></Link> */}
            
        </Container>
        
    );

}
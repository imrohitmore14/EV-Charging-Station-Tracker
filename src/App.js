// import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import RegistrationDashboard from './Components/RegistrationDashBoard';
import LoginDashboard from './Components/LoginDashboard';
import { SubadminLogin } from './Components/SubadminLogin';
import { SubadminRegister } from './Components/SubadminRegister';
import { UserLogin } from './Components/UserLogin';
import { UserRegistration } from './Components/UserRegistration';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Registrationwindow } from './Components/Registrationwindow';
import { Loginwindow } from './Components/Loginwindow';
import { AdminLogin } from './Components/AdminLogin';
import { Home } from './Components/Home';
import { SubadminDetails } from './Components/SubadminDetails';
import { AdminDetails } from './Components/AdminDetails';
import Footer from './Components/Footer';
import { UserFinder } from './Components/UserFinder';
import { OurDetails } from './Components/OurDetails';

function App() {
  return (
     <Router>
    <NavigationBar/>
   <Routes>
      <Route exact path='/ourdetails' element={<OurDetails></OurDetails>}></Route>
      <Route exact path='/populatecsstation' element={<UserFinder></UserFinder>}></Route>
      <Route exact path='/adminlogin/details' element={<AdminDetails></AdminDetails>}></Route>
      <Route exact path='/subadmin/details' element={<SubadminDetails></SubadminDetails>}></Route>
      <Route exact path='/adminlogin' element={<AdminLogin> </AdminLogin>}></Route>
      <Route exact path='/subadminlogin' element={<SubadminLogin></SubadminLogin>}></Route>
      <Route exact path='/userlogin' element={<UserLogin></UserLogin>}></Route>
      <Route exact path="/register" element={<Registrationwindow></Registrationwindow>} />
      <Route  exact path="/login" element={<Loginwindow></Loginwindow>}/>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="userregister" element={<UserRegistration></UserRegistration>}></Route> 
       <Route exact path="subadminregister" element={<SubadminRegister></SubadminRegister>}></Route> 
      </Routes>
      <br></br>
      <br></br><br></br>
      <Footer/>
     
   </Router>
   
  );
}

export default App;



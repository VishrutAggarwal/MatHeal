import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Authentication from './components/Authentication';
import Landing from './components/Landing';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PatientDash from './components/PatientDash';
import NoPage from './components/NoPage';
import TeleHealth from './components/TeleHealth';
import CommunityDashBoard from './components/CommunityDashBoard';
import CommunityLogin from './components/CommunityLogin';

function App() {
  return (
    <>
    <Router>
       <Routes>
        <Landing />
        <Authentication />
        <TeleHealth />
        <ContactUs />
        <Route path ='/dashboard' element={<PatientDash />}></Route>
        <Route path ='/communitylogin' element={<CommunityLogin />}></Route>
        <Route path ='/communitydashboard' element={<CommunityDashBoard />}></Route>
         <Footer />
      </Routes>
    </Router> 
    </>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Test from './components/Test';
import PatientDash from './components/PatientDash';
import NoPage from './components/NoPage';
import CommunityDashBoard from './components/CommunityDashBoard';
import CommunityLogin from './components/CommunityLogin';
import SupplierDash from './components/SupplierDash';

function App() {
  return (
    <>
    <HashRouter baseline="/">
      <Routes>
        <Route path ='/dashboard' element={<PatientDash />}></Route>
        <Route path ='/communitylogin' element={<CommunityLogin />}></Route>
        <Route path ='/communitydashboard' element={<CommunityDashBoard />}></Route>
        <Route path ='/supplierdash/:id' element={<SupplierDash />}></Route>
        <Route exact path ='/' element = {<Landing />}></Route>
        {/* <Route exact path ='/' element = {<Test />}></Route> */}
      </Routes>
    </HashRouter>


    {/* <Router>
       <Routes>
        <Landing />
        <Authentication />
        <TeleHealth />
        <ContactUs />
         <Footer />
      </Routes>
    </Router>  */}
    </>
  );
}

export default App;

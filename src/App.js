import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Forgetpassword from './components/forgetpassword/forgetpassword';
import Navandsidebar from './pages/dashboard/navandsidebar/navandsidebar'
import Maindashbaord from './pages/dashboard/maindashboard/maindashbaord';
import Invoice from './pages/dashboard/Invoice/Invoice';


function App() {
  return (
    <div className="App">
      <Navandsidebar/>
      
  <Routes>
        <Route path='/' element= {<Login/>} />
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/forgetpassword' element= {<Forgetpassword/>}/>
      <Route path='/dashbaord' element={<Maindashbaord/>}/>
      <Route path='/invoice' element={<Invoice/>}/>



      
  </Routes>
  
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Forgetpassword from './components/forgetpassword/forgetpassword';
// import Navandsidebar from './pages/dashboard/navandsidebar/navandsidebar'

function App() {
  return (
    <div className="App">
  <Routes>
       <Route path='/' element= {<Login/>} />
       <Route path='/signup' element= {<Signup/>}/>
       <Route path='/forgetpassword' element= {<Forgetpassword/>}/>
       {/* <Route path='/' element= {<Navandsidebar/>}/> */}
  </Routes>
  
    </div>
  );
}

export default App;

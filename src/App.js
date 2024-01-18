import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <div className="App">
  <Routes>
       <Route path='/' element= {<Login/>} />
       <Route path='/signup' element= {<Signup/>}/>
  </Routes>
    </div>
  );
}

export default App;

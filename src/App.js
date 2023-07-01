
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Forget from './component/Login/Forget/Forget';
import SinUp from './component/Login/SinUp';
// import Navber from './component/Navber/Navber';



function App() {
  return (
    <div className="">
      {/* <Navber></Navber> */}
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forget' element={<Forget></Forget>}></Route>
        <Route path='/sinUp' element={<SinUp></SinUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;

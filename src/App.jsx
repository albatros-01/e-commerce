import React,{createContext, useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signin from './Component/Signin'
import Signup from './Component/Signup'
import Settingspages from './pages/Settingspages'
import Aboutpages from './pages/Aboutpages'
import Contactpages from './Pages/Contactpages'
import Cart from './Component/Cart'
import Checkout from './Component/Settingcomponent/Checkout'
import Admindashboard from './Pages/Admindashboard'






export const Globalstate=createContext()

const App = () => {

const[users,setUsers]=useState([])
const[cart,setCart]=useState([])
const[admincart,setAdmincart]=useState([])
  return (
    <Globalstate.Provider value={{users,setUsers,cart,setCart,admincart,setAdmincart}}>
      <Router>
        <Routes>        
          <Route path="/" element={<Signin />} />
            <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Settingspages/>}></Route>
          <Route path="/about" element={<Aboutpages/>}></Route>
          <Route path="/contact" element={<Contactpages/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/admin" element={<Admindashboard/>}></Route>

        </Routes>
      </Router>
    </Globalstate.Provider>
  );
}

export default App
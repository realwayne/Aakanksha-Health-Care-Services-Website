import React,{useState} from 'react'
import Home from './Pages/Home'
import './App.css'
import './Pages/Home'
import Doctors from './Pages/Doctorconsultation'
import Healthcamp from './Pages/Healthcamp'
import Notfound from './Pages/Notfound'
import Products from './Pages/Products'
import Location from './Pages/Location'
import UpdateProfile from './Pages/updateProfile'
import ForgetPassword from './Pages/ForgetPassword'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './Pages/cart'


const App = () => {
 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/medico" component={Knockknockmedico} /> */}
        <Route path="/doctors" component={Doctors} />
        <Route path="/camp" component={Healthcamp} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/location" component={Location} />
        <Route path="/updateProfile" component={UpdateProfile} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route component={Notfound} />
      </Switch>
    </Router>
    </>
  )
}


export default App

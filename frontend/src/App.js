import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';  
import LoginPage from './clientSide/page/loginPage' 
import RegisterPage from './clientSide/page/registerPage'
import Home from './clientSide/page/Home'
import Contact from './clientSide/page/contact'
import DiscoverMore from './clientSide/page/discoverMore';
import AdminHome from './adminSide/page/HomeAdmin';
import AddProducts from './adminSide/page/addProductsAdmin';
import UpdateProduct from './adminSide/component/UpdateProducsAdmin';
import Orders from './adminSide/page/OrdersAdmin';
import Users from './adminSide/page/UsersAdmin';
import Messages from './adminSide/page/MessageAdmin';
import About from './clientSide/page/About';
import Service from './clientSide/page/Service';
 
 
//import 'materialize-css/dist/css/materialize.min.css';

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            {/** CLIENT SIDE */}
            <Route exact path = "/" element={<LoginPage/>}></Route>
            <Route path = "/RegisterPage" element={<RegisterPage/>}></Route>
            <Route path = "/Home" element={<Home/>}></Route>
            <Route path = "/Contact" element={<Contact/>}></Route>
            <Route path = "/DiscoverMore" element={<DiscoverMore/>}></Route>
            <Route path = "/About" element={<About/>}></Route>
            <Route path = "/Services" element={<Service/>}></Route>

            {/** ADMIN SIDE */}

            <Route path = "/AdminHome" element={<AdminHome/>}></Route>
            <Route path = "/AddProduct" element={<AddProducts/>}></Route>
            <Route path = "/AddProduct/:id" element={<UpdateProduct/>}></Route>
            <Route path = "/addProducts/:id" element={<UpdateProduct/>}></Route>
            <Route path = "/UpdateProduct" element={<UpdateProduct/>}></Route>
            <Route path = "/Orders" element={<Orders/>}></Route>
            <Route path = "/Users" element={<Users/>}></Route>
            <Route path = "/Messages" element={<Messages/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

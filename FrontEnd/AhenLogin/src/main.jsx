import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Signin from './Components/Signin/Signin.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Welcome from './Components/Welcome/Welcome.jsx'
import Location from './Components/Location/Location.jsx'
import Services from './Components/Services/Services.jsx'
import AdminLogin from './Components/Admin/AdminLogin.jsx'
import AddDrivingSchool from './Components/AddDrivingSchool/AddDrivingSchool.jsx'
import Dashboard from './Components/Admin/Dashboard.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
      <Route path='welcome' element={<Welcome />} />
      <Route path='location' element={<Location />} />
      <Route path='service' element={<Services />} />
      <Route path='admin' element={<AdminLogin />} />
      <Route path='add' element={<AddDrivingSchool />} />
      <Route path='dashboard' element={<Dashboard />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

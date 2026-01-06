
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Books from './user/pages/Books'
import Profile from './user/pages/Profile'
import Contact from './user/pages/Contact'
import View from './user/pages/View'
import AdminCollections from './admin/pages/AdminCollections'
import AdminHome from './admin/pages/AdminHome'
import AdminProfile from './admin/pages/AdminProfile'
import Authent from './Pages/Auth'
import Pnf from './pages/Pnf'
import Preloader from './components/Preloader'
import { useContext, useState } from 'react'
import PaymentSuccess from './user/pages/PaymentSuccess'
import PaymentError from './user/pages/PaymentError'
import { routeGuardContext } from './contextAPI/AuthContext'


function App() {

  const {role,setAuthorised} = useContext(routeGuardContext)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3500);

  return (
    <>
      <Routes>
        <Route path='/' element={loading?<Preloader/>:<Home/>}/>
        <Route path='/login' element={<Authent/>}/>
        <Route path='/register' element={<Authent insideRegister={true}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/books' element={<Books/>}/>

      { 
      role == 'user'&& 
      <>
          <Route path='/user/profile' element={<Profile/>}/>
          <Route path='/books/:id/view' element={<View/>}/>
          <Route path='/user/payment-success' element={<PaymentSuccess/>}/>
          <Route path='/user/payment-error' element={<PaymentError/>}/>
          
       </>
       }
        {
        role == 'admin' &&
        <>
          <Route path='/admin/home' element={<AdminHome/>}/>
          <Route path='/admin/profile' element={<AdminProfile/>}/>
          <Route path='/admin/resources' element={<AdminCollections/>}/>
  
        </>
        }
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
    </>
  )
}

export default App

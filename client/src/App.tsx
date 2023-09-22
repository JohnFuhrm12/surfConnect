import './styles/App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';

import PageNotFound from './components/PageNotFound';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [authedUsername, setAuthedUsername] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const test = 'rendered Home';
  const test2 = 'rendered SignUp';

  const props = {
    test,
    test2,
    authedUsername,
    setAuthedUsername,
    loggedIn,
    setLoggedIn
  }

  return (
    <>
      <Navbar {...props}/>
      <Routes>
        <Route path='/' element={ <Home {...props}/> }/>
        <Route path='/login' element={ <Login {...props}/> }/>
        <Route path='/signup' element={ <SignUp {...props}/> }/>
        <Route path='/profile' element={ <Profile {...props}/> }/>
        <Route path="/404" element={ <PageNotFound/> }/>
        <Route path="*" element={ <Navigate to="/404"/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;

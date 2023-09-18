import './styles/App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import PageNotFound from './components/PageNotFound';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const test = 'rendered Home';
  const test2 = 'rendered SignUp';

  const props = {
    test,
    test2
  }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home {...props}/> }/>
        <Route path='/signup' element={ <SignUp {...props}/> }/>
        <Route path="/404" element={ <PageNotFound/> }/>
        <Route path="*" element={ <Navigate to="/404"/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;

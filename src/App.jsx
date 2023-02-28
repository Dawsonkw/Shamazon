import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Creator from './components/Creator';
import NewAuth from './components/NewAuth';
import PrivateRoutes from './components/PrivateRoutes';
import Account from './pages/Account';
import Home from './pages/Home';





function App() {

  return (
    <Router>
      <div className='font-robotoSlab'>
        <Routes>
          <Route exact path='/' element={<Home />}/>      
          <Route path='/userAuth'  element={<NewAuth />}/>
          <Route element={<PrivateRoutes />}>
            <Route element={<Account />} path='/account'/>
          </Route>
          <Route path='/creator' element={<Creator />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App


//  Basically just an Amazon clone, minus some features and plus some other ones.

// TO DO: 
//  1. set up product pages
//  2. Route to product pages
//  3. pull in JSON data from apt and put it in product pages depending on item
//  4. Figure out sticky header
//  5. Build out cart page
//  6. figure out buy options
//  7. Mobile Breakpoints
//  8. color scheme  
//
//
//
//
//

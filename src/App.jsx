import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Creator from './components/Creator';
import NewAuth from './components/NewAuth';
import PrivateRoutes from './components/PrivateRoutes';
import Account from './pages/Account';
import Home from './pages/Home';
import Electronics from './pages/Electronics';
import Clothing from './pages/Clothing';
import HealthBeauty from './pages/HealthBeauty';
import Groceries from './pages/Groceries';
import HomeDeco from './pages/HomeDeco';
import Automotive from './pages/Automotive';
import Cart from './pages/Cart';
import ApiHandler from './api/ApiHandler';
import Accessories from './pages/Accessories';





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
          <Route path='/electronics' element={<ApiHandler> <Electronics /> </ApiHandler>}/>
          <Route path='/clothing' element={<ApiHandler> <Clothing /> </ApiHandler>} />
          <Route path='/healthBeauty' element={<ApiHandler> <HealthBeauty /> </ApiHandler>} />
          <Route path='/accessories' element={<ApiHandler> <Accessories /> </ApiHandler>} />
          <Route path='/groceries' element={<ApiHandler> <Groceries /> </ApiHandler>} />
          <Route path='/homeDeco' element={<ApiHandler> <HomeDeco /> </ApiHandler>} />
          <Route path='/automotive' element={<ApiHandler> <Automotive /> </ApiHandler>} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App


//  Basically just an Amazon clone, minus some features and plus some other ones.

// TO DO: 
//  1. set up product pages ie; styling 
//  2. Add in additional JSON info to each product page
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

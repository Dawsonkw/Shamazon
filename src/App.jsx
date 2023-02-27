import './App.css';
import ApiHandler from './api/ApiHandler';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Creator from './components/Creator';
import NewAuth from './components/NewAuth';
import PrivateRoutes from './components/PrivateRoutes';
import Account from './pages/Account';
import Home from './pages/Home';





function App() {

  return (
    <Router>
      <div>
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
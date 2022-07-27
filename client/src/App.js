import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Menus from './pages/Menus';
import Cart from './pages/Cart';
import OrderComplete from './pages/OrderComplete';
import Signup from './pages/Signup';
import Login from './pages/Login';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <Login /> </IsAnon>} />
        <Route path="/restaurants" element={<IsPrivate> <Restaurants /> </IsPrivate>} />
        {/* <Route path="/restaurants/:id" element={<IsPrivate> <Restaurants /> </IsPrivate>} /> */}
        <Route path="/menus/:id" element={<IsPrivate> <Menus /> </IsPrivate>} /> 
        
        <Route path="/cart" element={<IsPrivate> <Cart /> </IsPrivate>} />
        {/* <Route path="/cart/:id" element={<IsPrivate> <Cart /> </IsPrivate>} />  */}
        <Route path="/cart/edit/:id" element={<IsPrivate> <Cart /> </IsPrivate>} />
        
        <Route path="/order-complete" element={<IsPrivate> <OrderComplete /> </IsPrivate>} /> 
      </Routes>
    </div>
  );
}

export default App;

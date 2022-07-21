import './App.css'; 
import { Routes, Route} from 'react-router-dom'; 
import Signup from './pages/Signup'; 
import Login from './pages/Login';
import IsPrivate from './components/IsPrivate'; 
import IsAnon from './components/IsAnon';


function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/signup" element={ <IsAnon><Signup /></IsAnon> } /> 
        <Route path="/login" element={ <IsAnon><Login /></IsAnon> } />       
        <Route path="/restaurant" element={ <IsPrivate><Restaurant /></IsPrivate> } /> 
        <Route path="/restaurantList" element={ <IsPrivate><RestaurantList /></IsPrivate> } /> 
        <Route path="/menu" element={ <IsPrivate><Menu /></IsPrivate> } /> 
        <Route path="/cart" element={ <IsPrivate><CartView /></IsPrivate> } /> 
        <Route path="/order-complete" element={ <IsPrivate><OrderComplete /></IsPrivate> } />
      
      </Routes>
    </div>
  );
} 

export default App;

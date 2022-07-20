import './App.css'; 
import { Routes, Route} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Signup" element={<Signup />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/restaurant" element={<Restaurant />} /> 
        <Route path="/restaurantList" element={<RestaurantList />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/cart" element={<CartView />} /> 
        <Route path="/order-complete" element={<OrderComplete />} />
      
      </Routes>
    </div>
  );
} 

export default App;

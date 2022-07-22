import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Restaurant from './pages/Restaurant';
import RestaurantList from './pages/RestaurantList';
import Menu from './pages/Menu';
import CartView from './pages/CartView';
// import OrderComplete from './pages/OrderComplete';
import Signup from './pages/Signup';
import Login from './pages/Login';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/signup" element={<IsAnon> <Signup /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <Login /> </IsAnon>} />

        {/* <Route path="/restaurant" element={<IsPrivate> <Restaurant /> </IsPrivate>} /> */}
        {/* <Route path="/restaurant/:id" element={<IsPrivate> <Restaurant /> </IsPrivate>} /> */}
        <Route path="/restaurantList" element={<IsPrivate> <RestaurantList /> </IsPrivate>} />

        {/* <Route path="/projects" element={ <ProjectListPage /> } />
        <Route path="/projects/:id" element={ <ProjectDetailsPage /> } />

        <Route path="/menu" element={<IsPrivate> <Menu /> </IsPrivate>} />
        <Route path="/cart" element={<IsPrivate> <CartView /> </IsPrivate>} />
        {/* <Route path="/projects/edit/:id" element={ <EditProjectPage /> } /> */}
        {/* <Route path="/order-complete" element={<IsPrivate> <OrderComplete /> </IsPrivate>} /> */} */}

      </Routes>
    </div>
  );
}

export default App;

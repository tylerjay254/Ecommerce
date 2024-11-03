
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop  from './Pages/User/Shop.jsx';
import ShopCartegory  from './Pages/User/ShopCategory.jsx';
import UserAuth  from './Pages/User/UserAuth.jsx';
import Product from "./Pages/User/Product.jsx";
import Cart from "./Pages/User/Cart.jsx";


function App(){
  return (
    <div >
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Shop/>}/>
        <Route path="/mens" element={<ShopCartegory category="men"/>}/>
        <Route path= "/womens" element={<ShopCartegory category="women"/>}/>
        <Route path= "/kids" element={<ShopCartegory category="kids"/>}/>
        <Route path= "/product" element={<Product/>}/>
        <Route path= ":productID" element={<Product/>}/>   
        <Route path= "/checkout"element={<Cart/>}/>
        <Route path= "/login" element={<UserAuth/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;

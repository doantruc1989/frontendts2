import Home from './pages/Home/Home';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Products from './pages/Product/Products';
import Category from './pages/Category/Category';
import Menu from './components/Menu/Menu';
import Blogdetail from './pages/Blogdetail/Blogdetail';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile'
import RequireAuth from './other/RequireAuth'
import Unthorized from './pages/unauthorized/Unthorized';
import Pagenotfound from './pages/unauthorized/Pagenotfound';
// import Payment from './pages/Payment/Payment';
import Paysuccess from './pages/Payment/Paysuccess';
import ChangePw from './pages/ChangePw/ChangePw';
import Forgotpw from './pages/Forgotpw/Forgotpw';
import UpdateNewPw from './pages/ChangePw/UpdateNewPw';
import ProductDetail from './pages/Product/ProductDetail';
import Checkout from './pages/Checkout/CheckOut';
import CheckOut2 from './pages/Checkout/CheckOut2';
import Banktransfer from './pages/Checkout/Banktransfer';
import Creditcard from './pages/Checkout/Creditcard';
import Momo from './pages/Checkout/Momo';
import Cod from './pages/Checkout/Cod';
const ROLES = {
  'User': 'user',
  'Admin': 'admin'
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpw" element={<Forgotpw />} />
        <Route path="/reset-password/:forgotToken" element={<UpdateNewPw />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/changepw" element={<ChangePw />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout2" element={<CheckOut2 />}>
          <Route path="cod" element={<Cod />} />
          <Route path="momo" element={<Momo />} />
          <Route path="banktrans" element={<Banktransfer />} />
          <Route path="creditcard" index element={<Creditcard />} />
        </Route>

        <Route path="/checkout2/banktrans" element={<Banktransfer />} />
        <Route path="/checkout2/creditcard" element={<Creditcard />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/paysuccessful" element={<Paysuccess />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/category" element={<Menu />} />
        <Route path="/category/:categoryname" element={<Category />} />
        <Route path="/blog/:blogid" element={<Blogdetail />} />
        <Route path="/unauthorized" element={<Unthorized />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;

import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/index'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import Admin from './components/Admin'
import ResetPassword from './components/ResetPassword'
import UpdateProfile from './components/UpdateProfile'
import Product from './components/Product'
import NotFound from './components/NotFound'

export default function App() {

  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AppProvider>
  )
}

import './css/App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AppProvider } from './context'
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
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/account" component={Account} />
          <Route path="/admin" component={Admin} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/product/:id" component={Product} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </AppProvider>
  )
}

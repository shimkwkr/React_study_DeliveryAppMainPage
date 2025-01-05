import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import OrderPage from "./pages/OrderPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import AuthHeader from "./components/AuthHeader"
import './style.css'

function App() {

  return (
    <BrowserRouter>
      <AuthHeader/>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
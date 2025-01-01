import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import OrderPage from "./pages/OrderPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

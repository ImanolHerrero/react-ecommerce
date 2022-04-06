import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const Component = ({ title }) => {
  return (
    <div>
      <p style={{ paddingTop: '150vh' }}>{title}</p>
    </div>
  )
}


function App() {
  return (
    <Router>
      <Wrapper>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/product' element={<Product />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </Wrapper>
    </Router>
  );
}

export default App;

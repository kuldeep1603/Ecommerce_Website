import React from 'react';
// router 
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

// pages 
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Singup from './Pages/Singup/Singup';
import Wishlist from './Pages/Wishlist/Wishlist';
import CategoryProduct from './Pages/CategoryProduct/CategoryProduct';
import Search_product from './Pages/Search_product/Search_product';

// compoenets
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// toast 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const location = useLocation();
    const paths = [];
    const pathInclude = paths.includes(location.pathname);

    const PrivateRoute = ({ element: Component, ...rest }) => {
        const UserLogin = JSON.parse(localStorage.getItem('UserLogin'));
        return UserLogin ? <Component {...rest} /> : <Navigate to="/signup" />;
    };

    return (
        <>
            {pathInclude ? "" : <Navbar />}
            <Routes>
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path="/Wishlist" element={<PrivateRoute element={Wishlist} />} />
                <Route path="/Cart" element={<PrivateRoute element={Cart} />} />
                <Route path="/Checkout" element={<PrivateRoute element={Checkout} />} />
                <Route path="/About" element={<PrivateRoute element={About} />} />
                <Route path="/Contact" element={<PrivateRoute element={Contact} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Singup />} />
                <Route path="*" element={<Error />} />
                <Route path="/query/:Search" element={<PrivateRoute element={Search_product} />} />
                <Route path="/products/:category" element={<PrivateRoute element={CategoryProduct} />} />
                <Route path="/Product/:id" element={<PrivateRoute element={SingleProduct} />} />
            </Routes>
            {pathInclude ? "" : <Footer />}
            <ToastContainer />
        </>
    );
}

export default App;

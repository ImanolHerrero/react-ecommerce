import React from 'react';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Annoucement />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;

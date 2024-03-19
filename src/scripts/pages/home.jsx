import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import Brands from '../components/brands';

const Home = () => {
    return (
        <>
            <Navigation />
            <Brands />
            <Footer />
        </>
    );
};

export default Home;
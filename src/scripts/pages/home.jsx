import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';
import Brands from '../components/brands';
import Categorires from '../components/categorires';

const Home = () => {
    return (
        <>
            <Navigation />
            <Categorires />
            <Brands />
            <Footer />
        </>
    );
};

export default Home;
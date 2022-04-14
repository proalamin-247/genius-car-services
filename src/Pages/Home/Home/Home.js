import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const services =[
    { id: 1, name: 'oil change', price: 100, descrition: '', img: 'https://i.ibb.co/mH10v9F/repair1.png'},
    { id: 1, name: 'oil change', price: 100, descrition: '', img: 'https://i.ibb.co/mH10v9F/repair1.png'}
]

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;
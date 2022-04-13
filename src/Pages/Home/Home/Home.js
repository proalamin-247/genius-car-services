import React from 'react';
import Services from '../Services/Services';

const services =[
    { id: 1, name: 'oil change', price: 100, descrition: '', img: 'https://i.ibb.co/mH10v9F/repair1.png'},
    { id: 1, name: 'oil change', price: 100, descrition: '', img: 'https://i.ibb.co/mH10v9F/repair1.png'}
]

const Home = () => {
    return (
        <div>
            <Services></Services>
        </div>
    );
};

export default Home;
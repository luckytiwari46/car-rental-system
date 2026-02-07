import React from 'react';
import CarList from './CarList';
import SpecialOffer from './SpecialOffer';

function Home() {
    return (
        <div className="container">
            <div className="jumbotron text-center my-4">
                <h1 className="display-4">Welcome to Car Rental</h1>
                <p className="lead">Choose your favorite car and book it instantly!</p>
            </div>
            <SpecialOffer />
            <CarList />
        </div>
    );
}

export default Home;

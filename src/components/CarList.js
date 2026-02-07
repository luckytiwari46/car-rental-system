import React from 'react';
import { cars } from '../data';
import { Link } from 'react-router-dom';

function CarList() {
    return (
        <div className="row">
            {cars.map(car => (
                <div key={car.id} className="col-md-4 mb-4">
                    <div className="card shadow-sm h-100 border-0">
                        <div className="position-relative">
                            <img src={car.image} className="card-img-top" alt={car.name} style={{ height: '220px', objectFit: 'cover' }} />
                            <span className="position-absolute top-0 end-0 badge bg-primary m-2">{car.type}</span>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title d-flex justify-content-between align-items-center">
                                {car.name}
                                <span className="text-secondary fs-6">₹{car.price}/day</span>
                            </h5>

                            <div className="mt-2 mb-3">
                                <span className="badge bg-light text-dark border me-1">
                                    <i className="bi bi-gear-fill me-1"></i>{car.transmission}
                                </span>
                                <span className="badge bg-light text-dark border me-1">
                                    <i className="bi bi-fuel-pump-fill me-1"></i>{car.fuelType}
                                </span>
                                <span className="badge bg-light text-dark border">
                                    <i className="bi bi-people-fill me-1"></i>{car.seats} Seats
                                </span>
                            </div>

                            <Link to={`/book/${car.id}`} className="btn btn-outline-primary mt-auto w-100 fw-bold">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CarList;

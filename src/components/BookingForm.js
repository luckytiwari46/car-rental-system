import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data';

function BookingForm({ addBooking }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === parseInt(id));

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!car) return <div className="container mt-5"><h2>Car not found</h2></div>;

    const handleSubmit = e => {
        e.preventDefault();
        addBooking({
            id: Date.now(),
            car,
            name,
            email,
            phone,
            date,
            totalPrice: car.price
        });
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mt-5 text-center">
                <div className="card shadow-lg p-5 border-0 d-inline-block">
                    <div className="card-body">
                        <h1 className="text-success mb-4 display-1"><i className="bi bi-check-circle-fill"></i></h1>
                        <h2 className="card-title text-success mb-3">🎉 Booking Successful!</h2>
                        <p className="card-text lead">
                            You have booked <strong>{car.name}</strong> for <strong>{date}</strong>.
                        </p>
                        <p className="text-muted">
                            Our team will reach out to you soon to confirm the details.
                        </p>
                        <button className="btn btn-primary mt-4 btn-lg" onClick={() => navigate('/')}>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-lg border-0">
                        <img src={car.image} className="card-img-top" alt={car.name} style={{ height: '300px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h3 className="card-title">{car.name}</h3>
                            <p className="text-muted">{car.type}</p>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Price per day:</span>
                                <strong className="text-primary">₹{car.price}</strong>
                            </div>
                            <div className="mt-3">
                                <span className="badge bg-secondary me-2">{car.transmission}</span>
                                <span className="badge bg-secondary me-2">{car.fuelType}</span>
                                <span className="badge bg-secondary">{car.seats} Seats</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Booking Details</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nameInput"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="nameInput">Full Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="emailInput">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phoneInput"
                                        placeholder="1234567890"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="phoneInput">Phone Number</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dateInput"
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="dateInput">Booking Date</label>
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Confirm Booking
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingForm;

import React from 'react';

function BookingList({ bookings }) {
    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-primary"><i className="bi bi-journal-text me-2"></i>All Bookings</h2>
            {bookings.length === 0 ? (
                <div className="alert alert-info">No bookings yet. Go to Home to book a car.</div>
            ) : (
                <div className="card shadow-sm border-0">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped mb-0 align-middle">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Car Details</th>
                                        <th>Customer Info</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((b) => (
                                        <tr key={b.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={b.car.image} alt={b.car.name} className="rounded me-3" style={{ width: '60px', height: '40px', objectFit: 'cover' }} />
                                                    <div>
                                                        <h6 className="mb-0">{b.car.name}</h6>
                                                        <small className="text-muted">{b.car.type} • {b.car.transmission} • {b.car.fuelType}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div><strong>{b.name}</strong></div>
                                                <div className="small text-muted"><i className="bi bi-envelope me-1"></i>{b.email}</div>
                                                <div className="small text-muted"><i className="bi bi-telephone me-1"></i>{b.phone}</div>
                                            </td>
                                            <td>{b.date}</td>
                                            <td className="fw-bold text-success">₹{b.car.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingList;

import React, { useState } from 'react';

function SpecialOffer() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="bg-warning text-dark text-center py-2 position-relative mb-4">
            <div className="container">
                <strong>Special Offer Available!</strong> <em>Visit our showroom to know more about this offer</em>
            </div>
            <button
                onClick={() => setVisible(false)}
                className="btn-close position-absolute top-50 end-0 translate-middle-y me-3"
                aria-label="Close"
            ></button>
        </div>
    );
}

export default SpecialOffer;

import React from 'react';
import "./style.scss"

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found_details">
                <h1 className="not-found_details_gt">
                    <span className="not-found_details_gt_404">404</span>
                </h1>
                <h4 className="not-found_details_op">Oops!</h4>
                <p className="not-found_details_ps">We're sorry, <br/>
                    The page you were looking for doesn't exist anymore.</p>
                <a href="/sign-in" className="not-found_details_backBtn">Back to Home</a>
            </div>
        </div>
    );
};

export default NotFound;
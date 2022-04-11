import React from 'react';
import { Link } from 'react-router-dom';

const LoginRegister = () => {
    return (
        <div className="">
            <Link to={'/auth'} className="btn btn-primary me-1">
                Join now
            </Link>
        </div>
    );
};

export default LoginRegister;

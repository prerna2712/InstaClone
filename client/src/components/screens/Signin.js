import React from 'react';
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div className="myCard">
            <div className="card authCard input-field">
                <h2>Instagram</h2>
                <input
                    text="text"
                    placeholder="email"
                />
                <input
                    text="text"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light #1a237e indigo darken-4">
                    Login
                </button>
                <h5>
                    <Link to='/Signup'>Don't have an account</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin;
import React from 'react';
import SignUpComponent from '../components/signUp.jsx';
import { Navigate } from "react-router-dom";

function SignUp() {
    return (
        <div>
            <h1>SignUp</h1>
            <div>
                <SignUpComponent />
            </div>
        </div>

    );
}

export default SignUp;



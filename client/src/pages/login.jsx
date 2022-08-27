import React, { useState } from 'react';
import LoginComponent from '../components/login.jsx';
import { Navigate } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <LoginComponent />
            </div>
        </div>

    );
}

export default Login;
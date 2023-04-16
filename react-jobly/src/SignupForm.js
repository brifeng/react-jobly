import React, { useState } from "react";
import axios from 'axios';

const SignupForm = () => {
    const [name, setName] = useState('name');
    const [email, setEmail] = useState('email@email.com');
    const [password, setPassword] = useState('password');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/users', {
                name,
                email,
                password,
            });
            if (response.status === 201) {
                console.log('Registration successful!');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <input type="submit" value="Sign up" />
        </form>
    );
}

export default SignupForm;
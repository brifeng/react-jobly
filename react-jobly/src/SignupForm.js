import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ signup }) => {
    const [formData, setFormData] = useState({
        username: "testusername",
        password: "testpassword",
        firstName: "firsttest",
        lastName: "lasttest",
        email: "email@email.com"
    });
    const [formErrors, setFormErrors] = useState([]);

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await signup(formData);
            if (res.success) {
                navigate("/companies");
            } else {
                setFormErrors(res.errors);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                First Name:
                <input type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} />
            </label>
            <br />
            <input type="submit" value="Sign up" />

            {formErrors.length
                ? <h5> {formErrors}</h5>
                : null
            }
        </form>
    );
}

export default SignupForm;
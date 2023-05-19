import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ login }) => {
    const [formData, setFormData] = useState({
        username: "testusername",
        password: "testpassword"
    });
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await login(formData);
            if (res.success) {
                navigate("/companies");
            }
            else { }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
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
                    Password:
                    <input type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default LoginForm;
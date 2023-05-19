import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

const Profile = ({ updateUserProfile }) => {
    const { currentUser } = useContext(UserContext);

    const [formData, setFormData] = useState({
        username: `${currentUser.username}`,
        password: `${currentUser.password}`,
        firstName: `${currentUser.firstName}`,
        lastName: `${currentUser.lastName}`,
        email: `${currentUser.email}`
    });
    const [formErrors, setFormErrors] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let profileData = {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName
        }
        const res = await updateUserProfile(formData.username, profileData);
        if (res.success) {
            window.location.reload();
        }
        else {
            setFormErrors(res.errors);
        }
    }

    if (!currentUser) {
        return (<Navigate to={"/"} />)
    }
    else {
        return (
            <div>
                <h1>Profile</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text"
                            name="username"
                            value={formData.username}
                            disabled />
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
                    <input type="submit" value="Save Changes" />
                    {/* {formErrors.length
                        ? <h5> {formErrors}</h5>
                        : null
                    } */}
                    <h5>{String(formErrors)}</h5>
                </form>
            </div>
        )
    }
}

export default Profile;
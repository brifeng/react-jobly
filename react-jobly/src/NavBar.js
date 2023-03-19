import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <Link to="/">Jobly</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
        </>
    )
}

export default Homepage;
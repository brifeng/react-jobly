import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Navbar = ({ logout }) => {
    const { currentUser } = useContext(UserContext);

    if (currentUser) {
        return (
            <>
                <Link to="/">Jobly</Link>
                <Link to="/companies">Companies</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/profile">{currentUser.username}'s Profile</Link>
                <Link to="/" onClick={logout}>Logout</Link>
            </>
        )
    }
    return (
        <>
            <Link to="/">Jobly</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </>
    )
}

export default Navbar;
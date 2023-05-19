import React, { useContext } from "react";
import UserContext from "./UserContext";

const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    if (currentUser) {
        return (
            <div>
                <h1>Jobly</h1>
                <h3>All the jobs in one, convenient place.</h3>
                <h3>Welcome Back, {currentUser.firstName}!</h3>
            </div>
        )
    }
    return (
        <div>
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            <button>
                <a href="/login">
                    Log in
                </a>
            </button>
            <button>
                <a href="/signup">
                    Sign up
                </a>
            </button>
        </div>
    )
}

export default Homepage;
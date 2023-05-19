import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import JoblyApi from "./Api";
import { decodeToken } from "react-jwt";
import UserContext from "./UserContext";
import useLocalStorage from "./useLocalStorage";


const Jobly = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);

    const [token, setToken] = useLocalStorage('jobly-token');
    const [currentUser, setCurrentUser] = useState(null);

    async function getApiData() {
        let companies = await JoblyApi.getAllCompanies();
        setCompanies(companies);
        let jobs = await JoblyApi.getAllJobs();
        setJobs(jobs);
        setIsLoading(false);
    }

    async function getApiSearchData(search) {
        setIsLoading(true);
        let companies = await JoblyApi.getCompaniesBySearch(`name=${search}`);
        setCompanies(companies);
        setIsLoading(false);
    }
    async function getJobSearchData(search) {
        setIsLoading(true);
        let jobs = await JoblyApi.getJobsBySearch(`title=${search}`);
        setJobs(jobs);
        setIsLoading(false);
    }

    async function signup(signupData) {
        try {
            let token = await JoblyApi.signup(signupData);
            setToken(token);
            return { success: true };
        } catch (errors) {
            console.error("signup failed", errors);
            return { success: false, errors };
        }
    }

    async function login(loginData) {
        try {
            let token = await JoblyApi.login(loginData);
            setToken(token);
            return { success: true };
        } catch (errors) {
            console.error("login failed", errors);
            return { success: false, errors };
        }
    }

    async function logout() {
        try {
            setToken(null);
            setCurrentUser(null);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(function loadUserInfo() {
        async function getCurrentUser() {
            if (token) {
                try {
                    let { username } = decodeToken(token);
                    JoblyApi.token = token;
                    let currentUser = await JoblyApi.getCurrentUser(username);
                    setCurrentUser(currentUser);
                } catch (error) {
                    console.error(error);
                    setCurrentUser(null);
                }
            }
        }
        getCurrentUser();
    }, [token]);

    async function updateUserProfile(username, data) {
        try {
            let user = await JoblyApi.updateUserProfile(username, data);
            return { success: true, user };
        } catch (errors) {
            console.error(errors);
            return { success: false, errors };
        }
    }

    async function applyToJob(username, jobId) {
        try {
            let res = await JoblyApi.applyToJob(username, jobId);
            return res;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ currentUser, applyToJob }}>
                <NavBar signup={signup} login={login} logout={logout} />
                <Routes>
                    <Route exact path="/"
                        element={<Homepage />} />
                    <Route exact path="/companies"
                        element={<CompaniesList
                            companies={companies}
                            getApiSearchData={getApiSearchData} />} />
                    <Route exact path="/companies/:handle"
                        element={<CompanyDetail
                            companies={companies}
                            jobs={jobs} />} />
                    <Route exact path="/jobs"
                        element={<JobsList
                            jobs={jobs}
                            getJobSearchData={getJobSearchData} />} />
                    <Route exact path="/login"
                        element={<LoginForm
                            login={login} />} />
                    <Route exact path="/signup"
                        element={<SignupForm
                            signup={signup} />} />
                    <Route exact path="/profile"
                        element={<Profile
                            updateUserProfile={updateUserProfile} />} />
                    <Route path="*"
                        element={<Navigate to={"/"} />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default Jobly;
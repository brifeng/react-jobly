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


const Jobly = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);

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

    useEffect(() => {
        getApiData();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/"
                    element={<Homepage />} />
                <Route exact path="/companies"
                    element={<CompaniesList companies={companies} getApiSearchData={getApiSearchData} />} />
                <Route exact path="/companies/:handle"
                    element={<CompanyDetail companies={companies} jobs={jobs} />} />
                <Route exact path="/jobs"
                    element={<JobsList jobs={jobs} getJobSearchData={getJobSearchData} />} />
                <Route exact path="/login"
                    element={<LoginForm />} />
                <Route exact path="/signup"
                    element={<SignupForm />} />
                <Route exact path="/profile"
                    element={<Profile />} />
                <Route path="*"
                    element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Jobly;
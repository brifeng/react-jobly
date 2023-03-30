import React, { useState } from "react";
import JobCard from "./JobCard";

const JobsList = ({ jobs, getJobSearchData }) => {
    const [searchForm, setSearchForm] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchForm(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            getJobSearchData(searchForm.title);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <h1>Jobs List here</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Enter job title..."
                    value={searchForm.title}
                    onChange={handleChange}
                    name="title" />
                <button>Submit</button>
            </form>
            {jobs.map(job => (
                <JobCard job={job} />
            ))}
        </>
    )
}

export default JobsList;
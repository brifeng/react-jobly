import React from "react";

const JobsList = ({ jobs }) => {
    return (
        <>
            <h1>Jobs List here</h1>
            <ul>
                {jobs.map(job => (
                    <li>{job.title}</li>
                ))}
            </ul>
        </>
    )
}

export default JobsList;
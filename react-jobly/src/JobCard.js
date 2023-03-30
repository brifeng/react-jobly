import React from "react";

const JobCard = ({ job }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h6><b>{job.title}</b></h6>
                <p>{job.companyName}</p>
                <div>
                    <small>Salary: {job.salary}</small>
                </div>
                <div>
                    <small>Equity: {job.equity}</small>
                </div>
            </div>
        </div>
    )
}

export default JobCard;
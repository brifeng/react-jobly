import React from "react";

const JobCard = ({ job }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h6>{job.title}</h6>
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
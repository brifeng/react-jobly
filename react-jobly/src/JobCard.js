import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

const JobCard = ({ job }) => {
    const { currentUser, applyToJob } = useContext(UserContext);

    async function handleApply(event) {
        applyToJob(currentUser.username, job.id);
        setApplied(true);
    }

    function userHasApplied() {
        return currentUser.applications.includes(job.id);
    }
    const [applied, setApplied] = useState(userHasApplied());

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

                {applied ? <button disabled>
                    Applied
                </button>
                    :
                    <button onClick={handleApply}>
                        Apply
                    </button>
                }
            </div>
        </div>
    )
}

export default JobCard;
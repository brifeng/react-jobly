import React, { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import JobCard from "./JobCard";
import UserContext from "./UserContext";

const CompanyDetail = ({ companies, jobs }) => {
    const { currentUser } = useContext(UserContext);

    const { handle } = useParams();

    let company = companies.find(company => company.handle === handle)
    if (!company)
        return <Navigate to={"/companies"} />

    let companyJobs = jobs.filter(job => job.companyHandle === handle)

    if (currentUser) {
        return (
            <div>
                <h4>{company.name}</h4>
                <p>{company.description}</p>
                <div className="JobCardList">
                    {companyJobs.map(job => (
                        <JobCard job={job} />
                    ))}
                </div>
            </div>
        )
    }
    else {
        return (<Navigate to={"/"} />)
    }
}

export default CompanyDetail;
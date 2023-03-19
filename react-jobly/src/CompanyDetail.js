import React from "react";
import { useParams, Navigate } from "react-router-dom";
import JobCard from "./JobCard";

const CompanyDetail = ({ companies, jobs }) => {
    const { handle } = useParams();

    let company = companies.find(company => company.handle === handle)
    if (!company)
        return <Navigate to={"/companies"} />

    let companyJobs = jobs.filter(job => job.companyHandle === handle)

    return (
        <div>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <div class="JobCardList">
                {companyJobs.map(job => (
                    <JobCard job={job} />
                ))}
            </div>
        </div>
    )
}

export default CompanyDetail;
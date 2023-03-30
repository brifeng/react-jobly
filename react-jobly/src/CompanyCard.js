import React from "react";

const CompanyCard = ({ company }) => {
    const link = `/companies/${company.handle}`;
    return (
        <a href={link}>
            <div className="card-body" key={link}>
                <h6 className="card-title">{company.name}</h6>
                <small>{company.description}</small>
            </div>
        </a>

    )
}

export default CompanyCard;
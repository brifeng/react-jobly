import React from "react";

const CompanyCard = ({ company }) => {
    const link = `/companies/${company.handle}`;
    return (
        <a href={link}>
            <div class="card-body">
                <h6 class="card-title">{company.name}</h6>
                <small>{company.description}</small>
            </div>
        </a>

    )
}

export default CompanyCard;
import React from "react";
import CompanyCard from "./CompanyCard";

const CompaniesList = ({ companies }) => {
    return (
        <>
            <h1>Companies List here</h1>
            <form action="">
                <input type="text" />
                <button>Submit</button>
            </form>
            {companies.map(company => (
                <CompanyCard company={company} />
            ))}

        </>
    )
}

export default CompaniesList;
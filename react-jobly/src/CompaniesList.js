import React, { useState } from "react";
import CompanyCard from "./CompanyCard";

const CompaniesList = ({ companies, getApiSearchData }) => {
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
            getApiSearchData(searchForm.name);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <h1>Companies List here</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Enter company name..."
                    value={searchForm.name}
                    onChange={handleChange}
                    name="name" />
                <button>Submit</button>
            </form>
            {companies.map(company => (
                <CompanyCard company={company} />
            ))}

        </>
    )
}

export default CompaniesList;
import React, { useEffect, useState } from 'react';
import CompanyInfo from './CompanyInfo.js'

export default function Companies(props) {

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState();

    const [companySelected, setCompanySelected] = useState([]);
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const r = await fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OmQ0NjhiNWY4YWZiODZhYzIyOTEwNWEwMzk0MzFmZTQx');
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText || ' - failed to load'}`);
                }

                const companies = await r.json();
                setCompanies(companies);
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    if (loading) {
        return <h2>Loading...</h2>;
    }

    handleClick = () => {
       setCompanySelected(this)
    }


    return (
        <>
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Find Company
                </button>
                < ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                    {companies.map(company => (
                        <li className="dropdown-item" href="#" onClick={this.handleClick }> {company.name}</li >

                    ))}

                </ul>
            </div>
       <CompanyInfo company ={companySelected}/>
        </>
    )
}
import React, { useEffect, useState } from 'react';
import StockValue from './StockValue.js';
export default function Companies(props) {

    const [company] = (props);

    const [companyData, setCompanyData] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const r = await fetch('https://api-v2.intrinio.com/companies/AAPL?api_key=OmQ0NjhiNWY4YWZiODZhYzIyOTEwNWEwMzk0MzFmZTQx');
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText || ' - failed to load'}`);
                }

                const data = await r.json();
                setCompanyData(data);
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false);
            }
        })();
    }, company);
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <div className="btn-group">
                    {company.map(company => (
                     <h1> {company.name}</h1 >

                    ))}

                <button type="button" className="btn btn-primary " onClick={this.updateTicker}>
                    Update Ticker
                </button>
                <StockValue company = {company}/>
            </div>
        </>
    )
}
import React, { useEffect, useState } from 'react';


export default function StockValue(props) {

    const [company] = (props);

    const [stockData, setStockData] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const r = await fetch('https://api-v2.intrinio.com/securities/AAPL/prices/realtime?api_key=OmQ0NjhiNWY4YWZiODZhYzIyOTEwNWEwMzk0MzFmZTQx');
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText || ' - failed to load'}`);
                }

                const data = await r.json();
                setStockData(data);
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
                {stockData.map(data => (
                    <h1> {data.price}</h1 >

                ))}
            </div>
        </>
    )
}
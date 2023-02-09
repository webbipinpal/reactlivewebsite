import React, { useEffect, useState } from "react";
import './Covid19Data.css'

const Covid19Data = () => {
    const [data, setData] = useState([]);
    const govDataCovid =  async () => {
        const res = await fetch('https://data.covid19india.org/data.json')
        const actulData = await res.json();
        setData(actulData.statewise)
   }
    useEffect(() => {
        
        govDataCovid()
    }, [])
    console.log(data)
    return(
        <div className="container">
             <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-center mb-3">India Covid 19 Dashboard</h1>
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">State</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">Active</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) => {
                                return (
                                    <tr>
                                    <td scope="col">{item.state}</td>
                                    <td scope="col">{item.confirmed}</td>
                                    <td scope="col">{item.recovered}</td>
                                    <td scope="col">{item.deaths}</td>
                                    <td scope="col">{item.active}</td>
                                    <td scope="col">{item.lastupdatedtime}</td>
                                </tr>
                                )
                            })}
                            
                        </tbody>
                        </table> 
                </div>

             </div>
        </div>
    )
}

export default Covid19Data;
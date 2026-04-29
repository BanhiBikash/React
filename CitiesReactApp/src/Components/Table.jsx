import React, { useEffect, useState } from "react";
import axios from "axios";
import citiesService from "../services/api";

function CityTable() {

    const [tableData, setTableData] = React.useState([])

    useEffect(() => {
        const fetchData = async ()=>{

            try {
                console.log('fetching...')
                const response = await citiesService.getAll();
                setTableData(response.data);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        }
        fetchData()
    },[])

    return (
        <div className="city-table-container">
            <table className="city-table">
                <thead>
                    <tr>
                        <th>City ID</th>
                        <th>City Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(function (city) { return (<tr key={city.cityId}><td>{city.cityId}</td><td>{city.cityName}</td></tr>) })}
                </tbody>
            </table>
        </div>
    );
}

export default CityTable;

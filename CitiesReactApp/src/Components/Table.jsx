import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import citiesService from "../services/api";

function CityTable() {

    const [tableData, setTableData] = React.useState([])

    //render the data
    const renderData = (data) => {
        setTableData(data)
    }

    //initial fetch
    useEffect(() => {
        //data fetch
        const fetchData = async () => {
            try {
                console.log('fetching...')
                const response = await citiesService.getAll();
                renderData(response.data);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        }
        fetchData()
    }, [])

    //button actions
    //get single city
    const getByID = async (id) => {
        console.log("getting By Id"+id)
        const response = await citiesService.getByID(id);
        //giving in array form
        renderData([response.data])
    }

    //edit
    const edit = async()=>{
    }

    //delete by ID
    const deleteByID = async()=>{

    }

    return (
        <div className="city-table-container">
            <table className="city-table">
                <thead>
                    <tr>
                        <th>City ID</th>
                        <th>City Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(function (city) { return (<TableRow cityId={city.cityId} cityName={city.cityName} getByID={getByID} edit={edit} deleteByID={deleteByID} />) })}
                </tbody>
            </table>
        </div>
    );
}

export default CityTable;

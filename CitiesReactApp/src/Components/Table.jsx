import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import citiesService from "../services/api";
import PostCityDialogBox from "./PostCityDialogBox";

function CityTable(prop) {

    const [tableData, setTableData] = React.useState([])
    const [postDialog, setPostDialog] = React.useState(null)

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
    const edit = async(id,userData)=>{
    }

    //delete by ID
    const deleteByID = async(id)=>{
        const response = await citiesService.getByID(id)

        if(response.data==null) //No city data found
        {
            console.log("city not found")
            
            prop.setDialogConfig({message:"City not found!", type:"notfound", onCancel:()=>{prop.setDialogConfig(null)}})

        }
        else    //City Data found, delete WARNING!
        {
            console.log("confirm!")
            prop.setDialogConfig({message:"Are you sure you want to delete this city?", type:"confirm",
                onCancel:()=>{prop.setDialogConfig(null)},
                onConfirm:async ()=>{
                    await citiesService.deleteByID(id)

                    //check if deleted
                    const response  = await citiesService.getByID(id)
                    if(response.data==null){    //city deleted
                        prop.setDialogConfig({message:"City successfully deleted", type:"notfound", onCancel:()=>{prop.setDialogConfig(null)}})
                        const reloadResponse = await citiesService.getAll();
                        renderData(reloadResponse.data)
                    }else{    //city not deleted
                        prop.setDialogConfig({message:"City not deleted", type:"notfound", onCancel:()=>{prop.setDialogConfig(null)}})
                    }
                }
            })
        }
    }

    const addCity = ()=>{
        console.log("open post")
        setPostDialog({type:"post", cityData:{cityId:"",cityName:""}})
    }

    return (
        <div className="city-table-container">
            <button className='buttonEnLarge' onClick={addCity}>Add City</button>
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
            {/* PostCity-DialogBox */}
            {postDialog && <PostCityDialogBox renderData={renderData} type={postDialog.type} cityData={postDialog.cityData} setPostDialog={setPostDialog} />}
        </div>
    );
}

export default CityTable;


import React from 'react';
import DataGrid from 'react-data-grid';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function EmployeeComponent() {
	
	const fetchEmployees = () => {
    axios.get('http://localhost:8080/employees')
      .then( (response) => {
        //console.log("response", response);
		setMasterData(response.data);
		setRows(response.data);
		setLoading(false);
      })
      .catch( (error) => {
        console.log(error);
      });  
  }
	const [columns, setColumns] = useState([
  { key: 'id', name: 'EMP ID' },
  { key: 'name', name: 'NAME' },
  { key: 'age', name: 'AGE' },
  { key: 'managerId', name: 'MANAGER ID' },
  { key: 'managerName', name: 'MANAGER NAME' },
]);
	const [rows, setRows] = useState([]);
	const [loading, setLoading] = useState(true);
	const [color, setColor] = useState("#ffffff");
	const [masterData, setMasterData] = useState([]);
	 useEffect(() => {
		 fetchEmployees();
		 },[]);

const filter = (event) =>{
	const val = event.target.value.toLowerCase();
	//console.log("val "+val);
	if(val !== undefined || val !== ''){
	
	const filtered = masterData.filter((row) => {
		let exists = false;
	
		for(const key in row){
			//console.log("key "+key+" v "+row[key]);
			if(row[key] !== undefined && (row[key]+'').toLowerCase().includes(val))	{
				exists = true;
				break;
			}
		}
		return exists;
	}
);
 setRows(filtered);
	}
}

 
  return (<>
  <div className='Search'>
  Search <input onChange={filter} type="text"/>
  </div>
  <ClipLoader color={color} loading={loading} css = {override} size={150} />
	  {loading ? '' : <DataGrid columns={columns} rows={rows} />}
  
  </>
  );
}


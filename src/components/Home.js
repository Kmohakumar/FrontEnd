import React, { useState, useEffect, useCallback } from "react";
import Charts from "./Charts";
import { Input } from '@mui/material';
import { Button } from '@mui/material';
// import homeStyles from "../styles/homeStyles.module.css"
import Box from '@mui/material/Box';



const Home = () => {


  const [symbol, setSymbol] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://3.110.123.118:8000/historical-data/?symbol=${symbol}&from_date=${fromDate}&to_date=${toDate}`
    );
    const json = await response.json();
    setData(json);
    console.log(data)
  });
  useEffect(() => {
    handleSubmit(new Event('submit'));
  },[handleSubmit]);

  return (
    <Box sx={{display:"flex", margin:"40px",flexDirection: ['column', 'row'],justifyContent:"center"}}>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Symbol:
          <Input
            sx={{margin:"20px"}}
            type="text"
            value={symbol}
            onChange={(event) => setSymbol(event.target.value)}
          />
        </label>
        <br />
        <label>
          From Date:
          <Input
            sx={{margin:"20px"}}
            type="date"
            value={fromDate}
            onChange={(event) => setFromDate(event.target.value)}
          />
        </label>
        <br />
        <label>
          To Date:    
          <Input
            sx={{margin:"20px"}}
            type="date"
            value={toDate}
            onChange={(event) => setToDate(event.target.value)}
          />
        </label>
        <br />
        <Button sx={{backgroundColor:"lightGreen", fontWeight:"bold"}}type="submit">Get Historical Data</Button>
      </form>
      </div>    
      <div>
        <Charts data={data} />
      </div>
    </Box>
  );
};

export default Home;

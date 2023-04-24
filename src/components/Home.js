import React, { useState, useEffect, useCallback } from "react";
import { Input, Button, Box } from "@mui/material";
import Charts from "./Charts";

const Home = () => {
  const [symbol, setSymbol] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://backend-dq4m.onrender.com/historical-data/?symbol=${symbol}&from_date=${fromDate}&to_date=${toDate}`
    );
    const json = await response.json();
    setData(json);
  }, [symbol, fromDate, toDate]);

  useEffect(() => {
    const submitEvent = new Event("submit");
    handleSubmit(submitEvent);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        margin: "40px",
        flexDirection: ["column", "row"],
        justifyContent: "center",
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Symbol:
            <Input
              sx={{ margin: "20px" }}
              type="text"
              value={symbol}
              onChange={(event) => setSymbol(event.target.value)}
            />
          </label>
          <br />
          <label>
            From Date:
            <Input
              sx={{ margin: "20px" }}
              type="date"
              value={fromDate}
              onChange={(event) => setFromDate(event.target.value)}
            />
          </label>
          <br />
          <label>
            To Date:
            <Input
              sx={{ margin: "20px" }}
              type="date"
              value={toDate}
              onChange={(event) => setToDate(event.target.value)}
            />
          </label>
          <br />
          <Button
            sx={{ backgroundColor: "lightGreen", fontWeight: "bold" }}
            type="submit"
          >
            Get Historical Data
          </Button>
        </form>
      </div>
      <div>
        <Charts data={data} />
      </div>
    </Box>
  );
};

export default Home;

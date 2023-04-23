import React, {useEffect, useState, useRef} from "react";
import Box from '@mui/material/Box';
import styles from "./chartStyles.css"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = (props) => {
    
      const chartStyle = {
        width: '90%',
        maxWidth: '800px',
      };
  const { data } = props;
  
  return (
    <div style={{ width: '100%', height: '400px' }}>
        {data.length > 0 && (
          <LineChart width={800} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        )}
      </div>
  );
};

export default Charts;

// src/components/SalesHistory.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './SalesHistory.css';

const SalesHistory = ({ data }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const chartData = data.map(item => ({
    name: item.productName,
    purchaseDate: new Date(item.purchaseDate).getTime(),
    warrantyEndDate: new Date(item.warrantyEndDate).getTime(),
  }));

  return (
    <animated.div className="sales-history" style={animationProps}>
      <h2>Sales History</h2>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="purchaseDate" fill="#8884d8" />
        <Bar dataKey="warrantyEndDate" fill="#82ca9d" />
      </BarChart>
    </animated.div>
  );
};

export default SalesHistory;

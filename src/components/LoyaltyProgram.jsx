// src/components/LoyaltyProgram.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import './LoyaltyProgram.css';

const LoyaltyProgram = ({ data }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const chartData = data.transactions.map((item, index) => ({
    transaction: `Transaction ${index + 1}`,
    points: item.points,
  }));

  return (
    <animated.div className="loyalty-program" style={animationProps}>
      <h2>Loyalty Program</h2>
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="transaction" />
        <PolarRadiusAxis />
        <Radar name="Points" dataKey="points" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
      <p><strong>Current Points:</strong> {data.currentPoints}</p>
      <h3>Transactions</h3>
      <ul>
        {data.transactions.map((item, index) => (
          <li key={index}>
            <p><strong>Transaction ID:</strong> {item.transactionId}</p>
            <p><strong>Points:</strong> {item.points}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default LoyaltyProgram;

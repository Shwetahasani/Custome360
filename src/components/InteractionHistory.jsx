import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './InteractionHistory.css';

const InteractionHistory = ({ data }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const chartData = data.map((item, index) => ({
    name: item.date,
    type: item.type,
    interactionId: item.interactionId,
    index: index,
  }));

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <animated.div className="interaction-history" style={animationProps}>
      <h2>Interaction History</h2>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', color: 'black' }} />
        <Legend />
        <Bar
          dataKey="interactionId"
          fill="#8884d8"
          onMouseEnter={(e) => handleMouseEnter(e.index)}
          onMouseLeave={handleMouseLeave}
        >
          {chartData.map((entry, index) => (
            <Bar
              key={`bar-${index}`}
              dataKey="interactionId"
              fill={index === hoveredIndex ? '#82ca9d' : '#8884d8'}
            />
          ))}
        </Bar>
      </BarChart>
      <ul>
        {data.map((item, index) => (
          <li key={index} style={{ color: index === hoveredIndex ? '#82ca9d' : '#333' }}>
            <p><strong>Interaction ID:</strong> {item.interactionId}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Content:</strong> {item.content}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default InteractionHistory;

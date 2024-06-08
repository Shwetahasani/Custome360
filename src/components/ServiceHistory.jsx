import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './ServiceHistory.css';

const ServiceHistory = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Create a mapping object to associate colors with product names
  const colorToProductMap = {
    '#0088FE': 'Battery Problem',
    '#00C49F': 'Screen Issue',
    '#FFBB28': 'Product C',
    '#FF8042': 'Product D',
  };

  const chartData = data.reduce((acc, item, index) => {
    const existingIssue = acc.find(issue => issue.name === item.issue);
    if (existingIssue) {
      existingIssue.value += 1;
    } else {
      acc.push({ name: item.issue, value: 1, color: colors[acc.length % colors.length] });
    }
    return acc;
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <animated.div className="service-history" style={animationProps}>
      <h2>Service History</h2>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            onMouseEnter={(_, index) => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="chart-labels">
          <p><span style={{ color: '#0088FE' }}>■</span> Battery Problem</p>
          <p><span style={{ color: '#00C49F' }}>■</span> Screen Issue</p>
          {/* Add other labels here as needed */}
        </div>
      </div>
      {hoveredIndex !== null && (
        <div className="details">
          <h3>Details</h3>
          <p><strong>Product:</strong> {colorToProductMap[chartData[hoveredIndex].color]}</p>
          <p><strong>Ticket ID:</strong> {data[hoveredIndex].ticketId}</p>
          <p><strong>Issue:</strong> {data[hoveredIndex].issue}</p>
          <p><strong>Resolution:</strong> {data[hoveredIndex].resolution}</p>
          <p><strong>Date:</strong> {data[hoveredIndex].date}</p>
        </div>
      )}
    </animated.div>
  );
};

export default ServiceHistory;

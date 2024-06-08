// src/components/BasicInfo.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './BasicInfo.css';

const BasicInfo = ({ data }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="basic-info" style={animationProps}>
      <h2>Basic Information</h2>
      <div className="info-grid">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
      </div>
    </animated.div>
  );
};

export default BasicInfo;

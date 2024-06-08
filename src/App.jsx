// src/App.js
import React from 'react';
import { customerData } from './data';
import BasicInfo from './components/BasicInfo';
import SalesHistory from './components/SalesHistory';
import ServiceHistory from './components/ServiceHistory';
import InteractionHistory from './components/InteractionHistory';
import LoyaltyProgram from './components/LoyaltyProgram';
import Card from './components/Card';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Customer 360 View</h1>
      <div className="grid-container">
        <Card  className="basic-info1">
          <BasicInfo data={customerData.basicInfo} />
        </Card>
        <Card  className="sales-history1">
          <SalesHistory data={customerData.salesHistory} />
        </Card>
        <Card  className="service-history1">
          <ServiceHistory data={customerData.serviceHistory} />
        </Card>
        <Card  className="interaction-history1">
          <InteractionHistory data={customerData.interactionHistory} />
        </Card>
        <Card  className="loyalty-program1">
          <LoyaltyProgram data={customerData.loyaltyProgram} />
        </Card>
      </div>
    </div>
  );
};

export default App;

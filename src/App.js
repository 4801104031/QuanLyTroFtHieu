import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RoomList from './components/RoomManagement/RoomList';
import RoomTypeList from './components/RoomManagement/RoomTypeList';
import ServiceList from './components/ServiceManagement/ServiceList';
import MeterReading from './components/ServiceManagement/MeterReading';
import ResidentManagement from './components/ResidentManagement';
import ContractManagement from './components/ContractManagement';
import BillManagement from './components/BillManagement';
import ReportsManagement from './components/ReportsManagement';
import FeedbackManagement from './components/FeedbackManagement';
import AccountManagement from './components/AccountManagement';
import './styles/dashboard.css';


import './styles/dashboard.css';

function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [meterType, setMeterType] = useState('electric');

  const handleNavigation = (viewId, parentId) => {
    if (parentId === 'meter-readings') {
      setCurrentView('meter-readings');
      setMeterType(viewId === 'electric-meter' ? 'electric' : 'water');
    } else {
      setCurrentView(viewId);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'room-list':
        return <RoomList />;
      case 'room-types':
        return <RoomTypeList />;
      case 'service-prices':
        return <ServiceList />;
      case 'meter-readings':
        return <MeterReading type={meterType} />;
      case 'residents':
        return <ResidentManagement />;
      case 'contracts':
        return <ContractManagement />;
      case 'bills':
        return <BillManagement />;
      case 'reports':
        return <ReportsManagement />;
      case 'feedback':
        return <FeedbackManagement />;
      case 'account':
        return <AccountManagement />;
      default:
        return <div className="p-6">Chào mừng trở lại!</div>;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onNavigate={handleNavigation} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;


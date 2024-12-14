import React from 'react';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <h1>Chào mừng trở lại!</h1>
        </header>
        <div className="content">
          {/* Nội dung chính sẽ được thêm vào đây */}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;


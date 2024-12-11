import React, { useState } from 'react';
import { Edit, Trash2 } from 'react-feather';
import Modal from '../common/Modal';

function MeterReading({ type = 'electric' }) {
  const [readings, setReadings] = useState([
    {
      id: 1,
      roomNumber: '1',
      reading: 100,
      date: '2024-01-12'
    }
  ]);

  const [selectedRoom, setSelectedRoom] = useState('1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReading, setEditingReading] = useState(null);
  const [activeTab, setActiveTab] = useState(type);

  const rooms = [
    { id: 1, number: '1' },
    { id: 2, number: '22' }
  ];

  const handleEdit = (reading) => {
    setEditingReading(reading);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa chỉ số này?')) {
      setReadings(readings.filter(reading => reading.id !== id));
    }
  };

  return (
    <div className="content">
      <div className="content-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Danh sách chỉ số {activeTab === 'electric' ? 'điện' : 'nước'}</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <select 
              className="room-select"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              {rooms.map(room => (
                <option key={room.id} value={room.number}>
                  Phòng {room.number}
                </option>
              ))}
            </select>
            <button className="add-button" onClick={() => setIsModalOpen(true)}>
              + Thêm mới
            </button>
          </div>
        </div>
      </div>
      <div className="meter-tabs">
        <button 
          className={`meter-tab ${activeTab === 'electric' ? 'active' : ''}`}
          onClick={() => setActiveTab('electric')}
        >
          Điện
        </button>
        <button 
          className={`meter-tab ${activeTab === 'water' ? 'active' : ''}`}
          onClick={() => setActiveTab('water')}
        >
          Nước
        </button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Phòng số</th>
              <th>Chỉ số</th>
              <th>Ngày ghi nhận</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {readings
              .filter(reading => reading.roomNumber === selectedRoom)
              .map((reading, index) => (
                <tr key={reading.id}>
                  <td>{index + 1}</td>
                  <td>{reading.roomNumber}</td>
                  <td>{reading.reading}</td>
                  <td>{reading.date}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        className="action-button edit"
                        onClick={() => handleEdit(reading)}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="action-button delete"
                        onClick={() => handleDelete(reading.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MeterReading;


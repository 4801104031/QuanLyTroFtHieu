import React, { useState, useEffect } from 'react';

function RoomForm({ room, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    roomNumber: '',
    roomType: '',
    status: 'Trống',
    bedCount: 0,
    fridgeCount: 0,
    acCount: 0
  });

  useEffect(() => {
    if (room) {
      setFormData(room);
    }
  }, [room]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="room-form">
      <div className="form-group">
        <label htmlFor="roomNumber">Số phòng:</label>
        <input
          type="text"
          id="roomNumber"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="roomType">Loại phòng:</label>
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Chọn loại phòng</option>
          <option value="VIP">VIP</option>
          <option value="LUX">LUX</option>
          <option value="STA">STA</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="status">Trạng thái:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Trống">Trống</option>
          <option value="Đã thuê">Đã thuê</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="bedCount">Số giường:</label>
        <input
          type="number"
          id="bedCount"
          name="bedCount"
          value={formData.bedCount}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="fridgeCount">Số tủ lạnh:</label>
        <input
          type="number"
          id="fridgeCount"
          name="fridgeCount"
          value={formData.fridgeCount}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="acCount">Số điều hòa:</label>
        <input
          type="number"
          id="acCount"
          name="acCount"
          value={formData.acCount}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-button">
          {room ? 'Cập nhật' : 'Thêm mới'}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Hủy
        </button>
      </div>
    </form>
  );
}

export default RoomForm;


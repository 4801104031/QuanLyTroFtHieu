import React, { useState, useEffect } from 'react';

function ResidentForm({ resident, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    idNumber: '',
    phone: '',
    room: ''
  });

  useEffect(() => {
    if (resident) {
      setFormData(resident);
    }
  }, [resident]);

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
        <label htmlFor="firstName">Tên:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Họ:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Ngày sinh:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="idNumber">CMND/CCCD:</label>
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Số điện thoại:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="room">Phòng:</label>
        <input
          type="text"
          id="room"
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-button">
          {resident ? 'Cập nhật' : 'Thêm mới'}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Hủy
        </button>
      </div>
    </form>
  );
}

export default ResidentForm;


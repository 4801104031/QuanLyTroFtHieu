import React, { useState, useEffect } from 'react';

function ContractForm({ contract, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    roomNumber: '',
    tenant: '',
    contractType: '',
    startDate: '',
    endDate: '',
    isActive: true
  });

  useEffect(() => {
    if (contract) {
      setFormData(contract);
    }
  }, [contract]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="room-form">
      <div className="form-group">
        <label htmlFor="roomNumber">Phòng số:</label>
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
        <label htmlFor="tenant">Người thuê:</label>
        <input
          type="text"
          id="tenant"
          name="tenant"
          value={formData.tenant}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contractType">Loại hợp đồng:</label>
        <select
          id="contractType"
          name="contractType"
          value={formData.contractType}
          onChange={handleChange}
          required
        >
          <option value="">Chọn loại hợp đồng</option>
          <option value="Cá nhân">Cá nhân</option>
          <option value="Công ty">Công ty</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Ngày bắt đầu:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">Ngày kết thúc:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          <span>Hiệu lực</span>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-button">
          {contract ? 'Cập nhật' : 'Thêm mới'}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Hủy
        </button>
      </div>
    </form>
  );
}

export default ContractForm;


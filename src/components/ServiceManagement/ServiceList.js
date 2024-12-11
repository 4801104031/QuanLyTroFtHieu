import React, { useState } from 'react';
import { Edit } from 'react-feather';
import Modal from '../common/Modal';

function ServiceList() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Điện',
      price: 3500,
      unit: 'kilowatt-hour (kWh)',
      type: 'Mặc định'
    },
    {
      id: 2,
      name: 'Vệ sinh riêng',
      price: 100000,
      unit: 'phòng/tháng',
      type: 'Tùy chọn'
    },
    {
      id: 3,
      name: 'Rác thải',
      price: 20000,
      unit: 'người/tháng',
      type: 'Mặc định'
    },
    {
      id: 4,
      name: 'Nước',
      price: 20000,
      unit: 'mét khối',
      type: 'Mặc định'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const handleEdit = (service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="content">
      <div className="content-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Danh sách dịch vụ</h1>
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            + Thêm mới
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên dịch vụ</th>
              <th>Giá (VNĐ)</th>
              <th>Đơn vị tính</th>
              <th>Loại dịch vụ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={service.id}>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>{service.price.toLocaleString()}</td>
                <td>{service.unit}</td>
                <td>{service.type}</td>
                <td>
                  <button 
                    className="action-button edit"
                    onClick={() => handleEdit(service)}
                  >
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceList;


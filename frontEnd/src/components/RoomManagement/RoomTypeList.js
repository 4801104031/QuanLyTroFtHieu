import React from 'react';
import { Edit } from 'react-feather';

function RoomTypeList() {
  const roomTypes = [
    {
      stt: 1,
      name: 'VIP',
      area: 40,
      price: '5,000,000',
      bedCount: 2,
      fridgeCount: 1,
      acCount: 1
    },
    {
      stt: 2,
      name: 'LUX',
      area: 25,
      price: '3,000,000',
      bedCount: 2,
      fridgeCount: 1,
      acCount: 1
    },
    {
      stt: 3,
      name: 'STA',
      area: 20,
      price: '2,000,000',
      bedCount: 2,
      fridgeCount: 0,
      acCount: 1
    }
  ];

  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Danh sách loại phòng</h1>
        <button className="add-button">+ Thêm mới</button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên loại phòng</th>
              <th>Diện tích</th>
              <th>Giá thuê mặc định (vnđ)</th>
              <th>Số giường mặc định</th>
              <th>Số tủ lạnh mặc định</th>
              <th>Số điều hòa mặc định</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((type) => (
              <tr key={type.stt}>
                <td>{type.stt}</td>
                <td>{type.name}</td>
                <td>{type.area}</td>
                <td>{type.price}</td>
                <td>{type.bedCount}</td>
                <td>{type.fridgeCount}</td>
                <td>{type.acCount}</td>
                <td>
                  <button className="action-button edit">
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

export default RoomTypeList;


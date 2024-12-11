import React, { useState } from 'react';
import { Edit, Trash2 } from 'react-feather';
import Modal from '../common/Modal';
import RoomForm from './RoomForm';

function RoomList() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomNumber: '1',
      roomType: 'VIP',
      status: 'Trống',
      bedCount: 2,
      fridgeCount: 1,
      acCount: 1
    },
    {
      id: 2,
      roomNumber: '22',
      roomType: 'STA',
      status: 'Trống',
      bedCount: 2,
      fridgeCount: 0,
      acCount: 1
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  const openModal = (room = null) => {
    setEditingRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingRoom(null);
  };

  const handleSubmit = (formData) => {
    if (editingRoom) {
      // Update existing room
      setRooms(rooms.map(room => room.id === editingRoom.id ? { ...formData, id: room.id } : room));
    } else {
      // Add new room
      setRooms([...rooms, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa phòng này?')) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Danh sách phòng</h1>
        <button className="add-button" onClick={() => openModal()}>+ Thêm mới</button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Phòng số</th>
              <th>Loại phòng</th>
              <th>Trạng thái</th>
              <th>Số giường</th>
              <th>Số tủ lạnh</th>
              <th>Số điều hòa</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id}>
                <td>{index + 1}</td>
                <td>{room.roomNumber}</td>
                <td>{room.roomType}</td>
                <td>
                  <span className={`status-badge ${room.status === 'Trống' ? 'empty' : 'occupied'}`}>
                    {room.status}
                  </span>
                </td>
                <td>{room.bedCount}</td>
                <td>{room.fridgeCount}</td>
                <td>{room.acCount}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="action-button edit" onClick={() => openModal(room)}>
                      <Edit size={18} />
                    </button>
                    <button className="action-button delete" onClick={() => handleDelete(room.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={editingRoom ? 'Sửa phòng' : 'Thêm phòng mới'}>
        <RoomForm room={editingRoom} onSubmit={handleSubmit} onCancel={closeModal} />
      </Modal>
    </div>
  );
}

export default RoomList;


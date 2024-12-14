import React, { useState } from 'react';
import { Edit, Trash2 } from 'react-feather';
import Modal from '../common/Modal';
import ContractForm from './ContractForm';

function ContractList() {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      roomNumber: '1',
      tenant: 'Nguyễn Thắng',
      contractType: 'Công ty',
      startDate: '2024-01-31',
      endDate: '2024-03-01',
      isActive: true
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContract, setEditingContract] = useState(null);

  const openModal = (contract = null) => {
    setEditingContract(contract);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingContract(null);
  };

  const handleSubmit = (formData) => {
    if (editingContract) {
      // Update existing contract
      setContracts(contracts.map(contract => 
        contract.id === editingContract.id ? { ...formData, id: contract.id } : contract
      ));
    } else {
      // Add new contract
      setContracts([...contracts, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa hợp đồng này?')) {
      setContracts(contracts.filter(contract => contract.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setContracts(contracts.map(contract =>
      contract.id === id ? { ...contract, isActive: !contract.isActive } : contract
    ));
  };

  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Danh sách hợp đồng</h1>
        <button className="add-button" onClick={() => openModal()}>+ Thêm mới</button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Phòng số</th>
              <th>Người thuê</th>
              <th>Loại hợp đồng</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Hiệu lực</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract, index) => (
              <tr key={contract.id}>
                <td>{index + 1}</td>
                <td>{contract.roomNumber}</td>
                <td>{contract.tenant}</td>
                <td>{contract.contractType}</td>
                <td>{contract.startDate}</td>
                <td>{contract.endDate}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={contract.isActive}
                        onChange={() => handleToggleStatus(contract.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="action-button edit" onClick={() => openModal(contract)}>
                      <Edit size={18} />
                    </button>
                    <button className="action-button delete" onClick={() => handleDelete(contract.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={editingContract ? 'Sửa hợp đồng' : 'Thêm hợp đồng mới'}
      >
        <ContractForm contract={editingContract} onSubmit={handleSubmit} onCancel={closeModal} />
      </Modal>
    </div>
  );
}

export default ContractList;


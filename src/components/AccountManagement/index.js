import React, { useState } from 'react';
import { Edit2, Trash2 } from 'react-feather';

function AccountManagement() {
  const [accounts] = useState([
    {
      id: 1,
      type: 'admin',
      username: 'admin',
      password: 'admin',
      resident: null
    },
    {
      id: 2,
      type: 'resident',
      username: 'user',
      password: 'user',
      resident: 'Nguyễn Thắng'
    }
  ]);

  const handleEdit = (id) => {
    // Handle edit logic
    console.log('Edit account:', id);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log('Delete account:', id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Danh sách tài khoản hệ thống</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Thông tin tài khoản
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Đăng xuất
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">STT</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Loại tài khoản</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tên tài khoản (username)</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Mật khẩu (password)</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Cư dân</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {accounts.map((account, index) => (
              <tr key={account.id}>
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{account.type}</td>
                <td className="px-4 py-3 text-sm">{account.username}</td>
                <td className="px-4 py-3 text-sm">{account.password}</td>
                <td className="px-4 py-3 text-sm">{account.resident || '-'}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(account.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit2 size={16} />
                    </button>
                    {account.type !== 'admin' && (
                      <button
                        onClick={() => handleDelete(account.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
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

export default AccountManagement;


import React, { useState } from 'react';
import { Trash2, Eye, Check } from 'react-feather';

function BillList() {
  const [bills] = useState([
    {
      id: 1,
      name: 'Hóa đơn tháng 01 - 2024',
      room: '1',
      status: 'Mới',
      total: '5,000,000'
    },
    {
      id: 2,
      name: 'Hóa đơn tháng 01 - 2024',
      room: '1',
      status: 'Mới',
      total: '5,000,000'
    }
  ]);

  const handleDelete = (id) => {
    // Handle delete logic
    console.log('Delete bill:', id);
  };

  const handleView = (id) => {
    // Handle view logic
    console.log('View bill:', id);
  };

  const handleApprove = (id) => {
    // Handle approve logic
    console.log('Approve bill:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Hóa đơn</h2>
        <div className="relative">
          <input
            type="month"
            defaultValue="2024-01"
            className="px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">STT</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tên hóa đơn</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Phòng</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Trạng thái</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TC</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bills.map((bill, index) => (
              <tr key={bill.id}>
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{bill.name}</td>
                <td className="px-4 py-3 text-sm">{bill.room}</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {bill.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{bill.total}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDelete(bill.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      onClick={() => handleView(bill.id)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleApprove(bill.id)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Check size={16} />
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

export default BillList;


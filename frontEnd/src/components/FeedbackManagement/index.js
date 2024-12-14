import React, { useState } from 'react';
import { Trash2, Check } from 'react-feather';

function FeedbackManagement() {
  const [feedback] = useState([
    {
      id: 1,
      date: '2024-01-16',
      sender: 'Nguyễn Thắng',
      room: '0',
      subject: 'hehe',
      content: 'hehe',
      status: 'Chưa xử lý'
    },
    {
      id: 2,
      date: '2024-01-16',
      sender: 'Nguyễn Thắng',
      room: '0',
      subject: 'hehe',
      content: 'hehe',
      status: 'Chưa xử lý'
    }
  ]);

  const handleDelete = (id) => {
    // Handle delete logic
    console.log('Delete feedback:', id);
  };

  const handleApprove = (id) => {
    // Handle approve logic
    console.log('Approve feedback:', id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Danh sách phản hồi của cư dân</h1>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">STT</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ngày tạo</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Người gửi</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Phòng</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tiêu đề</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Nội dung</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Trạng thái</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {feedback.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{item.date}</td>
                <td className="px-4 py-3 text-sm">{item.sender}</td>
                <td className="px-4 py-3 text-sm">{item.room}</td>
                <td className="px-4 py-3 text-sm">{item.subject}</td>
                <td className="px-4 py-3 text-sm">{item.content}</td>
                <td className="px-4 py-3 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      onClick={() => handleApprove(item.id)}
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

export default FeedbackManagement;


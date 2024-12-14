import React, { useState } from 'react';
import {
  Home,
  Settings,
  Users,
  FileText,
  BarChart2,
  MessageSquare,
  User,
  Droplet,
  Zap,
  CreditCard
} from 'react-feather';

function Sidebar({ onNavigate }) {
  const [activeItem, setActiveItem] = useState('rooms');
  const [expandedItems, setExpandedItems] = useState(['rooms']);

  const toggleSubmenu = (itemId) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const menuItems = [
    {
      id: 'rooms',
      label: 'Quản lý Phòng',
      icon: Home,
      hasSubmenu: true,
      submenuItems: [
        { id: 'room-list', label: 'Phòng', url: '/rooms' },
        { id: 'room-types', label: 'Loại Phòng', url: '/room-types' }
      ]
    },
    {
      id: 'services',
      label: 'Quản lý dịch vụ',
      icon: Settings,
      hasSubmenu: true,
      submenuItems: [
        { id: 'service-prices', label: 'Bảng giá dịch vụ', url: '/services' },
        {
          id: 'meter-readings',
          label: 'Cập nhật chỉ số',
          icon: Settings,
          hasSubmenu: true,
          submenuItems: [
            { id: 'electric-meter', label: 'Điện', icon: Zap },
            { id: 'water-meter', label: 'Nước', icon: Droplet }
          ]
        }
      ]
    },
    { id: 'residents', label: 'Quản lý cư dân', icon: Users, hasSubmenu: false },
    { id: 'contracts', label: 'Hợp đồng thuê', icon: FileText, hasSubmenu: false },
    {
      id: 'bills',
      label: 'Quản lý hóa đơn',
      icon: FileText,
      hasSubmenu: false,
    },
    { id: 'reports', label: 'Báo cáo & Thống kê', icon: BarChart2, hasSubmenu: false },
    { id: 'feedback', label: 'Phản hồi cư dân', icon: MessageSquare, hasSubmenu: false },
    { id: 'account', label: 'Quản lý tài khoản', icon: User, hasSubmenu: false },
  ];

  const handleItemClick = (itemId, hasSubmenu) => {
    if (hasSubmenu) {
      toggleSubmenu(itemId);
    } else {
      setActiveItem(itemId);
      onNavigate(itemId);
    }
  };

  const handleSubmenuItemClick = (itemId, parentId) => {
    setActiveItem(itemId);
    onNavigate(itemId, parentId);
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/placeholder.svg" alt="Logo" className="logo" />
      </div>
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id, item.hasSubmenu)}
            >
              <div className="menu-item-content">
                <item.icon size={20} />
                <span>{item.label}</span>
                {item.hasSubmenu && (
                  <svg
                    className={`submenu-arrow transition-transform ${expandedItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {item.hasSubmenu && expandedItems.includes(item.id) && (
              <div className="submenu">
                {item.submenuItems?.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`submenu-item ${activeItem === subItem.id ? 'active' : ''}`}
                    onClick={() => handleSubmenuItemClick(subItem.id, item.id)}
                  >
                    <span>{subItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;


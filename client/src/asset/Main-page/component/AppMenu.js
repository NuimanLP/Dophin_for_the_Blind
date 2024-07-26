import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const AppMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getSelectedKey = () => {
    switch (currentPath) {
      case '/':
        return '1';
      case '/donation':
        return '2';
      case '/volunteer':
        return '3';
      case '/intern':
        return '4';
      case '/contact-us':
        return '5';
      case '/language-selection':
        return '6';
      default:
        return '1';
    }
  };

  return (
    <Header className="bg-white p-1">
      <Menu theme="light" mode="horizontal" selectedKeys={[getSelectedKey()]} className="flex justify-center w-full text-lg">
        <Menu.Item key="1">
          <Link to="/">หน้าหลัก</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/donation">อาสาสมัคร</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/volunteer">นักศึกษาฝึกงาน</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/intern">การบริจาค</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/contact-us">ติดต่อเรา</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/language-selection">Thai</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppMenu;

import type { FC } from 'react';
import React from 'react';
import { Breadcrumb } from 'antd';
// import ProTable, {}
import { useModel } from 'umi';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { PageContainer } from '@ant-design/pro-layout';
const Aogin: FC = () => {
  const message = useModel('demo');
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          {/* <a href="">Application Center</a> */}
          <Link to="/newdemo">New</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Center</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div>{message}</div>
    </div>
  );
};
export default Aogin;

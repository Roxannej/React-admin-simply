import * as React from 'react';
import { Breadcrumb } from 'antd';
import styles from './index.less';

const BreadCrumb: React.FC = (props) => {
  const { routes } = props;
  return (
    <>
      <Breadcrumb className={styles.breadcrumb_page}>
        {routes.map((item, index) => {
          return (
            <Breadcrumb.Item key={index}>
              <a href={item.href}>{item.content}</a>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default BreadCrumb;

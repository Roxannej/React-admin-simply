// import styles from './style.less';
import * as React from 'react';
import { PageHeader } from 'antd';
import type { PageHeaderProps, BreadcrumbProps } from 'antd';
import styles from './index.less';
import BreadCrumb from '../../components/BreadCrumb';

type PageConfigProps = {
  breadcrumb: BreadcrumbProps;
};
type routesProps = {
  href: string;
  content: string;
};

const routes: routesProps[] = [
  {
    href: '/patrol',
    content: '首页',
  },
  {
    href: '/form/basic-form',
    content: '受理记录',
  },
  {
    href: '/investigate',
    content: '查处记录',
  },
];

const Investigate: React.FC = () => {
  return (
    <>
      <BreadCrumb routes={routes} />
    </>
  );
};
export default Investigate;

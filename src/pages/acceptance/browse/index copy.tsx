import * as React from 'react';
import { Table, Tag, Space, Row, Col, Pagination, Tabs } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { history } from 'umi';
import styles from './index.less';

import Attachment from './components/attachment';

interface User {
  key: number;
  name: string;
}
const { TabPane } = Tabs;
const toInvestigation = () => {
  history.push('/investigate');
};
const columns: ColumnsType<User> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={toInvestigation}>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const pagState = {
  top: 'topLeft',
  bottom: 'bottomRight',
};

const BrowseList: React.FC = () => {
  return (
    <div>
      <Row className={styles.browser_page}>
        <Col xs={24} md={24} style={{ padding: '25px 25px 0px 25px' }}>
          <h3>浏览记录列表</h3>
        </Col>
      </Row>
      <Row className={styles.browser_page}>
        <Col xs={24} md={24} style={{ padding: '15px 25px 25px 25px' }}>
          <Table columns={columns} dataSource={data} pagination={false}></Table>
        </Col>
      </Row>
      <Row justify="end" className={styles.browser_page}>
        <Col xs={12} md={13} style={{ padding: '0px 25px 25px 25px' }}>
          <Pagination
            total={85}
            showTotal={(total) => `总共 ${total} 条`}
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }} className={styles.browser_page}>
        <Col></Col>
      </Row>
    </div>
  );
};
export default BrowseList;

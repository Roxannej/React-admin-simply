import * as React from 'react';
import { Table, Button, Switch, Space, Row, Col, Pagination, Tabs } from 'antd';
import { ColumnsType } from 'antd/es/table';
import NewTab from './components/index.tsx';
import styles from './index.less';

interface User {
  key: number;
  name: string;
}
// const toInvestigation = () => {
//   history.push('/investigate');
// }

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const BrowseList: React.FC = () => {
  const [checkStrictly, setCheckStrictly] = React.useState<boolean>(false);
  const [curCheck, setCurCheck] = React.useState({});
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // console.log(selected, selectedRows, changeRows);
    },
    renderCell: (checked, record, index, originNode) => {
      if (record.hasOwnProperty('children')) {
        return null;
      }
      return originNode;
    },
  };

  return (
    <div>
      <Row
        justify="space-between"
        className={styles.browser_page}
        style={{ padding: '25px 25px 0px 25px' }}
      >
        <Col xs={8} md={8}>
          <h3>浏览记录列表</h3>
        </Col>
        <Col xs={8} md={8}>
          <Button style={{ fontWeight: '500', marginRight: '10px' }} type="primary">
            派发
          </Button>
          <Button style={{ fontWeight: '500', marginRight: '10px' }} type="primary">
            延期
          </Button>
          <Button style={{ fontWeight: '500' }} type="primary">
            退单
          </Button>
        </Col>
      </Row>
      <Row className={styles.browser_page}>
        <Col xs={24} md={24} style={{ padding: '15px 25px 25px 25px' }}>
          <Table
            columns={columns}
            rowSelection={{ ...rowSelection, checkStrictly }}
            dataSource={data}
          />
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
        <Col>
          <NewTab></NewTab>
        </Col>
      </Row>
    </div>
  );
};
export default BrowseList;

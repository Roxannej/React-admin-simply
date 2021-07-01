import * as React from 'react';
import { Form, Button, Select, Tabs, Row, Col, Table, Tag, Space } from 'antd';

import styles from './index.less';

const { TabPane } = Tabs;

const columns = [
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
        <a>Invite {record.name}</a>
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
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const sights = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];

const TabDetail: React.FC = () => {
  return (
    <Row className={styles.tab_container} gutter={[0, 48]}>
      <Col xs={24} sm={24} sm={24}>
        <Tabs>
          <TabPane tab="检查表单" key="1">
            3333
          </TabPane>
          <TabPane tab="附件" key="2">
            <div>123--</div>
          </TabPane>
          <TabPane tab="受理记录" key="3">
            3333
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};
const basePagination = {
  current: 1,
  total: 10,
  pageSize: 10,
};
function onBaseClick(current, pageSize) {
  console.log(current, pageSize);
}
const RecordList: React.FC = () => {
  // const [size, setSize] = React.useState('default');

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <>
      <Row className={styles.record_form} style={{ marginBottom: '20px' }} justify="space-between">
        <Col xs={8} md={8}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="Username" name="username">
              <Select>
                {sights.map((item) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={4} md={4}>
          <Button type="primary">查询</Button>
        </Col>
      </Row>
      <Row className={styles.record_list}>
        <Col style={{ marginBottom: '15px' }}>
          <h3>浏览记录列表</h3>
        </Col>
        <Col xs={24} md={24}>
          <Table
            pagination={{
              current: basePagination.current,
              total: basePagination.total,
              simple: false,
              pageSizeOptions: ['10', '20', '30', '40', '50'],
              showSizeChanger: true,
              showTotal: (count = basePagination.total) => {
                return '共' + count + '条数据';
              },
              onChange: (current, pageSize) => {
                onBaseClick(current, pageSize);
              },
            }}
            size="middle"
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
      <TabDetail />
    </>
  );
};

export default RecordList;

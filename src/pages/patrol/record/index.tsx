import * as React from 'react';
import { Form, Button, Select, Tabs, Row, Col, Table, Tag, Space } from 'antd';

import { recordList } from '@/services/ant-design-pro/api';
import styles from './index.less';
import { useRequest } from 'ahooks';
import PicturesWall from '../components/Accessory.tsx';
import axios from 'axios';

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

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
//   {
//     key: '4',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const sights = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];
const picData = [
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

const TabDetail: React.FC = () => {
  return (
    <Row className={styles.tab_container} gutter={[0, 48]}>
      <Col xs={24} sm={24} sm={24}>
        <Tabs>
          <TabPane tab="检查表单" key="1">
            3333 999
          </TabPane>
          <TabPane tab="附件" key="2">
            <PicturesWall picList={picData} />
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
// function onBaseClick(current, pageSize) {
//   console.log(current, pageSize);
// }

const RecordListData: React.FC = () => {
  const [tableList, setList] = React.useState<any[]>([]);
  const [current, setCurrent] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [total, setTotal] = React.useState<number>(0);
  const params = {
    pageNo: current,
    pageSize,
  };
  const data2 = {
    pageNo: current,
    pageSize,
    params: {},
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const [data, setData] = React.useState();
  const getList = async (values: API.ListItem) => {
    const msg = await recordList({ ...values });
    if (msg.status === 200) {
      setData(msg.obj);
    } else {
      console.log('错误');
    }
  };
  React.useEffect(() => {
    getList(params);
  }, []);
  // React.useEffect(() => {
  //   axios({
  //     data: {
  //       pageSize: 10,
  //       pageNo: 1,
  //       params: {},
  //     },
  //     method: 'post',
  //     url: `http://192.168.50.168:8888/api/supervise/getFacSupervise?pageSize=${params.pageSize}&pageNo=${params.pageNo}`,
  //     headers: { Authorization: localStorage.getItem('token') },
  //     contentType: 'application/json;charset=UTF-8',
  //   }).then((res) => {
  //     const { obj, status } = res.data;
  //     if (status === 200) {
  //       setList(obj.list);
  //       setTotal(obj.total);
  //     }
  //   });
  // }, [params.pageSize, params.pageNo]);
  const onChangePage = (currentNum: number, pageSizeNum: number) => {
    setCurrent(currentNum);
    setPageSize(pageSizeNum);
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
              current,
              total,
              simple: false,
              pageSizeOptions: ['10', '20', '30', '40', '50'],
              showSizeChanger: true,
              showTotal: () => {
                return `共${total}条`;
              },
              onChange: (currentN, pageSizeN) => {
                onChangePage(currentN, pageSizeN);
              },
            }}
            size="middle"
            columns={columns}
            dataSource={tableList}
          />
        </Col>
      </Row>
      <TabDetail />
    </>
  );
};

export default RecordListData;

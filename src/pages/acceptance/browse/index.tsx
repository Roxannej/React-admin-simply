import * as React from 'react';
import { Table, Button, Tag, Space, Row, Col, Pagination, Tabs } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { history } from 'umi';
import styles from './index.less';
import Detail from './components/detail';
import Deal from './components/deal';
import Spot from './components/spot';
import Flow from './components/flow';
import Attachment from './components/attachment';

interface User {
  key: number;
  name: string;
}
const { TabPane } = Tabs;
// const toInvestigation = () => {
//   history.push('/investigate');
// }

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    description: (
      <div>
        123<Button>hao</Button>
      </div>
    ),
  });
}

const BrowseList: React.FC = () => {
  const [selectRow, setRowKey] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const start = () => {
    setLoading(true);

    setTimeout(() => {
      setRowKey([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setRowKey({ selectedRowKeys });
  };

  const rowSelection = {
    selectRow,
    onChange: onSelectChange,
  };

  const hasSelected = selectRow.length > 0;

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
          <div style={{ marginBottom: 16 }}>
            <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table
            size="middle"
            expandable={{
              expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            pagination={false}
            rowSelection={rowSelection}
            columns={columns}
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
          <Tabs defaultActiveKey="1" style={{ padding: '0px 25px 25px 25px' }}>
            <TabPane tab="受理详情" key="1">
              <Detail />
            </TabPane>
            <TabPane tab="处理结果" key="2">
              <Deal />
            </TabPane>
            <TabPane tab="勘查记录" key="3">
              <Spot />
            </TabPane>
            <TabPane tab="流程追溯" key="5">
              <Flow />
            </TabPane>
            <TabPane tab="附件" key="6">
              <Attachment />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
export default BrowseList;

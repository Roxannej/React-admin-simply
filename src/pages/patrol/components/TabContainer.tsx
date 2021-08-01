import * as React from 'react';
import { Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;

const TabDetail: React.FC = () => {
  return (
    <Row className={styles.tab_container} gutter={[0, 48]}>
      <Col xs={24} sm={24} sm={24}>
        <Tabs>
          <TabPane tab="检查表单" key="1">
            3333 999
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

export default TabDetail;

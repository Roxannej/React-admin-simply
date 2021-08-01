import * as React from 'react';
import { Space, Tabs } from 'antd';
import Detail from './detail';
import Deal from './deal';
import Spot from './spot';
import Flow from './flow';
import Attachment from './attachment';

const { TabPane } = Tabs;

const NewTab: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default NewTab;

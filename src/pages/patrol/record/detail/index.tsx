import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export type DetailProps = {
  tab: string;
  key: number;
  child: React.ReactNode;
};

const DetailItem: React.FC<DetailProps> = (props) => {
  const { tab, key, child } = props;
  return (
    <TabPane tab={tab} key={key}>
      {child}
    </TabPane>
  );
};

export default DetailItem;

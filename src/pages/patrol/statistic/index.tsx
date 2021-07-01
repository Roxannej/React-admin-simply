import React, { useState } from 'react';
import { Row, Col, Select, DatePicker, Space, Divider } from 'antd';
import BarChart from '../../../components/Charts/Bar.tsx';
// import Line from '../../../components/Charts/LIne.tsx';
import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;
export type StaticProps = {
  data: any;
};
const dateType = ['按日', '按月', '按年'];

const Statistic: React.FC<StaticProps> = () => {
  const [picker, setPicker] = useState<string>('');
  const defaultVal = '按日';
  const chooseDate = (value: string) => {
    // console.log(value);
    if (value === '按日') {
      setPicker('');
    } else if (value === '按月') {
      setPicker('month');
    } else if (value === '按年') {
      setPicker('year');
    }
  };

  const SelectType = () => {
    return (
      <>
        <Select defaultValue={defaultVal} style={{ width: 120 }} onChange={chooseDate}>
          {dateType.map((item, index) => {
            return (
              <Option key={index} value={item}>
                {item}
              </Option>
            );
          })}
        </Select>
      </>
    );
  };

  const dateChange = (date: any, dateString: string) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className={styles.chart_page}>
        <Row>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.chart_title}>不同类型巡查记录图</div>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <SelectType />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Space>
              <RangePicker picker={picker} onChange={dateChange} />
            </Space>
          </Col>
        </Row>
        <Divider />
        <Row>
          <BarChart></BarChart>
        </Row>
      </div>
      <div style={{ marginTop: 30 }} className={styles.chart_page}>
        <Row gutter={[0, 32]}>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.chart_title}>上报受理记录图</div>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <SelectType />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Space>
              <RangePicker picker={picker} onChange={dateChange} />
            </Space>
          </Col>
        </Row>
        <Divider />
        <Row gutter={[0, 48]}>
          {/* <BarChart></BarChart> */}
          {/* <Line /> */}
        </Row>
      </div>
    </>
  );
};

export default Statistic;

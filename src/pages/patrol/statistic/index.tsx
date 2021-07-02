import * as React from 'react';
import { Row, Col, Select, DatePicker, Space, Divider } from 'antd';
import BarChart from '../../../components/Charts/Bar.tsx';

import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const dateType = ['按日', '按月', '按年'];

const height = 400;

const Statistic: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const ref = React.useRef('main');
  const [picker, setPicker] = React.useState<string>('');
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
        <Row justify="space-between">
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
          <Col xs={24} md={24}>
            <BarChart data={data} ref={ref}></BarChart>
          </Col>
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

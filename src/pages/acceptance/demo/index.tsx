import * as React from 'react';
import BarChart from '../../../components/Charts/Bar.tsx';
// 是否能封装成通用的组件
const FlowChart: React.FC = () => {
  const ref = React.useRef('id');
  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];
  return (
    <>
      <div>
        <BarChart data={data} ref={ref} />
      </div>
    </>
  );
};

export default FlowChart;

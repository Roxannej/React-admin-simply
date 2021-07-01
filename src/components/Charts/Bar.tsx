// import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';

// interface BarProps {
//   bheight: number;
//   bpadding: number[];
// }

// const destoryG2() => {

// }
const data = [
  { type: 'Sports', num: 275 },
  { type: 'Strategy', num: 115 },
];
const BarChart = () => {
  let unmounted = false;
  // const $dom = useRef('container');

  useEffect(() => {
    const chart = new Chart({
      container: 'container',
      height: 300,
      width: 300,
    });

    if (!unmounted) {
      chart.data(data);
      chart.interval().position('type*num');
      chart.render();
    }

    return () => {
      unmounted = true;
    };
  }, []);

  return <div id="container"></div>;
};

export default BarChart;

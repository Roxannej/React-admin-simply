import * as React from 'react';
import { Chart } from '@antv/g2';

const G2 = React.forwardRef((props, ref) => {
  const { gHeight, gPadding, data } = props;

  // componentDidMount
  React.useEffect(() => {
    const chart = new Chart({
      container: ref.current,
      width: 600,
      height: 300,
    });
    chart.data(data);

    chart.interval().position('genre*sold');

    chart.render();

    // componentWillUnmount
    return () => {
      chart.changeData(data);
      chart.destroy();
    };
  }, [data]);

  return <div id="id" ref={ref}></div>;
});

export default G2;

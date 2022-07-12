import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import css from '@/component/screen/screen.module.scss';

function ChartPie({id, title, series, option }) {

    const charts = useRef(null)

    useEffect(() => {
      let echartObj = echarts.getInstanceByDom(charts.current);
      let pieChart = echartObj || echarts.init(charts.current);

      let defaultOption = {
        title: {
          text: title,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'horizontal',
          top: 35,
          bottom: 20,
          left: 'center'
        },
        series: series,
        ...option
      }
      if(!echartObj){
        pieChart.setOption({ ...defaultOption,  })
        
      } else {
        setTimeout(()=>{pieChart.resize()},400)
    }
  })

    return (
        <div className={css.fullBox} ref={charts}></div>
    )
}

export default ChartPie
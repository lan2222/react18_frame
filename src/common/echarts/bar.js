import React, { useRef, useEffect, memo } from 'react';
import * as echarts from 'echarts';
import css from '@/component/screen/screen.module.scss';

const Bar = memo(({id, title, series, option }) => {
    const charts = useRef(null)

    useEffect(() => {
        let echartObj = echarts.getInstanceByDom(charts.current)
        let barChart = echartObj || echarts.init(charts.current);
        let defaultOption = {
            title: {
                text: title,
                top: 0,
                left:'center',
                textStyle:{
                    color:'#fff',
                    fontSize:14,
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 35,
                left: 0,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: 80,
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: []
            },
            series: series,
            ...option
        }
        // console.log(defaultOption, 'Bar Echart')
        if(!echartObj){
            barChart.setOption({
                ...defaultOption,
            })
            console.log(JSON.stringify({...defaultOption, ...option}),'1')
        } else {
            setTimeout(()=>{barChart.resize()},400)
        }
        
    }, [id, option, series, title])

    return (
        <div className={css.fullBox} ref={charts}>
        </div>
    )
})

export default Bar

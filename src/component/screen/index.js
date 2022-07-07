import React, { useEffect, useLayoutEffect } from 'react';
import css from './screen.module.scss';
import Echart from '@/common/echarts'

export default function Screen() {

    // 这里可以做一个自定的 hooks 
    const computeREM = (screenRatioByDesign = 16/9) => {
        let docEle = document.documentElement;
        let screenRatio = docEle.clientWidth / docEle.clientHeight;
        let fontSize = (screenRatio > screenRatioByDesign ? (screenRatioByDesign / screenRatio) : 1) * docEle.clientWidth * (100 / 1920);
        docEle.style.fontSize = fontSize.toFixed(3) + 'px';
    }

    useLayoutEffect(() => {
        computeREM()
    }, [])

    useEffect(() => {  
        return () => {
            let docEle = document.documentElement;
            docEle.removeAttribute('style');
        }
    }, [])

    const transProps = () => {
        return {
            type: 'bar',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: 'Number of successful payouts per month',
				option: {
					xAxis: {
						type: 'category',
						data: ['A','B','C','D','E','F','G']
					}
				},
				series: [{
                    name: 'merchantNames[i]',
				    type: 'bar',
                    data: [40,50,60,70,80,90,100]
                }]
			}
        }
    }

    const lineProps = () => {
        let series = [{
			name: 'payout',
			type: 'line',
			data: [10,20,30,40,50,60],
		},
		{
			name: 'top-up',
			type: 'line',
			data: [100,80,60,40,20,10],
		},];
        return {
            type: 'line',
            chartsProp: {
				id: parseInt(Math.random()*10000),
				title: '998',
				option: {
					type: 'value',
					yAxis: {
						axisLabel: {
						formatter: '$ {value}'
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['5月','6月','7月','8月','9月','10月']
					}
				},
				series: [...series]
			}
        }
    }

    const pieProps = () => {
        return {
            type: 'pie',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: 'Pie Echarts',
				option: {
					color: ['#91cc75', '#ee6666', '#5470c6'],
				},
				series: [{
					name: 'Access From',
					type: 'pie',
					radius: '50%',
					center: ['50%', '65%'],
					data: [
						{ value: 400, name: 'Success' },
						{ value: 200, name: 'Fail' },
						{ value: 50, name: 'Pending' },
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}]
			}
        }
    }

    const ringProps = () => {
        return {
            type: 'pie',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: 'Pie Echarts',
				option: {
					color: ['#91cc75', '#ee6666', '#5470c6'],
				},
				series: [{
					name: 'Access From',
					type: 'pie',
					radius: ['40%', '55%'],
					center: ['50%', '65%'],
					data: [
						{ value: 400, name: 'Success' },
						{ value: 200, name: 'Fail' },
						{ value: 50, name: 'Pending' },
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}]
			}
        }
    }
    
    return (
        <div className={css.screen}>
            <div className={css.col_left}>
                <div className={css.box_1}>
                    <Echart {...transProps()}></Echart>
                </div>
                <div className={css.box_1}>
                    <Echart {...lineProps()}></Echart>
                </div>
                <div className={css.box_1}>
                    <Echart {...pieProps()}></Echart>
                </div>
            </div>
            <div className={css.col_center}>
                
            </div>
            <div className={css.col_rigth}>
                <div className={css.box_1}>
                    <Echart {...ringProps()}></Echart>
                </div>
            </div>
        </div>
    )
}

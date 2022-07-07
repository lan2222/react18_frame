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
    
    return (
        <div className={css.screen}>
            <div className={css.col_left}>
                <div className={css.box_1}>
                    <Echart {...transProps()}></Echart>
                </div>
            </div>
            <div className={css.col_center}></div>
            <div className={css.col_rigth}></div>
        </div>
    )
}

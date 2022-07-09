import React, { useLayoutEffect, useEffect } from 'react';
import css from '../screen.module.scss';
import selfCss from './index.module.scss';
import Header from '../common/header';
import Footer from '../common/footer';

export default function Index() {
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

    return (
        <div className={[css.screen, css.xqzl].join(' ')}>
            <Header>浙江树人学院校情总览</Header>
            <div className={selfCss.sreenMain}>
                <div className={selfCss.summary_column_1}>
                    
                </div>
                <div className={selfCss.summary_column_2}>

                </div>
                <div className={selfCss.summary_column_3}>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

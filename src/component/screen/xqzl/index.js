import React, { useLayoutEffect, useEffect } from 'react';
import css from '../screen.module.scss';
import selfCss from './index.module.scss';
import Header from '../common/header';
import Footer from '../common/footer';
import Block from '../common/frame/block';

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
        computeREM();
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
                    <div className={selfCss.Box_1}>

                    </div>
                    <div className={[selfCss.Box_2, css.mt20].join(' ')}>
                        <Block title='发展大事记'></Block>
                    </div>
                </div>
                <div className={selfCss.summary_column_2}>
                    <div className={selfCss.summary_row_1}>
                        <div className={selfCss.Box_3}>
                            1
                        </div>
                        <div className={selfCss.Box_3}>
                            2
                        </div>
                        <div className={selfCss.Box_3}>
                            3
                        </div>
                    </div>
                    <div className={selfCss.summary_row_2}>
                        <div className={selfCss.Box_4}>
                            1
                        </div>
                        <div className={selfCss.Box_4}>
                            2
                        </div>  
                    </div>
                    <div className={selfCss.summary_row_3}>
                        <div className={selfCss.Box_4}>
                            1
                        </div>
                        <div className={selfCss.Box_4}>
                            2
                        </div>                        
                    </div>
                </div>
                <div className={selfCss.summary_column_3}>
                    <div className={selfCss.Box_5}>
                            2
                    </div>
                    <div className={[selfCss.Box_6, css.mt20].join(' ')}>
                            2
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

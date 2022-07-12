import React, { useLayoutEffect, useEffect } from 'react';
import css from '../screen.module.scss';
import selfCss from './index.module.scss';
import Header from '../common/header';
import Footer from '../common/footer';
import Block from '../common/frame/block';
import Echart from '@/common/echarts'

import Icon1 from '@/assets/images/xqzl/icon1.png';
import Icon2 from '@/assets/images/xqzl/icon2.png';
import Icon3 from '@/assets/images/xqzl/icon3.png';
import Icon4 from '@/assets/images/xqzl/icon4.png';
import Icon5 from '@/assets/images/xqzl/icon5.png';
import Icon6 from '@/assets/images/xqzl/icon6.png';
import Icon7 from '@/assets/images/xqzl/icon7.png';
import campus_yxq from '@/assets/images/xqzl/campus_yxq.png';
import campus_gcq from '@/assets/images/xqzl/campus_gcq.png';

function TeachInfoBox({title, children}){
    return (
        <div className={selfCss.TeachInfoBox}>
            <div className={selfCss.TinfoHeader}>
                {title}
            </div>
            <div className={selfCss.TinfoContent}>{children}</div>
        </div>
    )
}

function StudentInfoBox({title, css, children}){
    return (
        <div className={selfCss.SinfoBox} style={{...css}}>
            <div className={selfCss.SinfoTit}>{title}</div>
            <div>{children}</div>
        </div>
    )
}

function CampusInfoBox({css, children}){
    return (
        <div className={selfCss.Cinfo} style={{...css}}>
            {children}
            {/* <div className={selfCss.title}>
                {title}
            </div> */}
        </div>
    )
}

export default function Index() {
    // 这里可以做一个自定的 hooks 
    const computeREM = (screenRatioByDesign = 16/9) => {
        let docEle = document.documentElement;
        let screenRatio = docEle.clientWidth / docEle.clientHeight;
        let fontSize = (screenRatio > screenRatioByDesign ? (screenRatioByDesign / screenRatio) : 1) * docEle.clientWidth * (100 / 1920);
        docEle.style.fontSize = fontSize.toFixed(3) + 'px';
    }

    const barProps = () => {
        return {
            type: 'bar',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: '',
				option: {
                    title:{
                        text:'近5年科研数量',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                        x: 'center',
                        y: '10px'
                    },
                    grid:{
                        top: '25%',
                        left: '6%',
                        right: '8%',
                        bottom: '15%',
                        containLabel: true
                    },
                    axisLabel:{
                        color: '#FFF',
                    },
                    legend:{
                        data: ['国家级','省级'],
                        bottom: 5,
                        textStyle: {
                            color: '#FFF'
                        }
                    },
					xAxis: {
						type: 'category',
                        axisLine:{
                            show: false,
                        },
						data: ['2018','2019','2020','2021','2022']
					}
				},
				series: [{
                    name: '国家级',
				    type: 'bar',
                    color: '#3271FA',
                    data: [2,3,4,3,5]
                },{
                    name: '省级',
				    type: 'bar',
                    color: '#87C483',
                    data: [4,6,4,6,8]
                },{
                    name: '国家级',
				    type: 'line',
                    color: '#8EFDFF',
                    data: [2,3,4,3,5]
                },{
                    name: '省级',
				    type: 'line',
                    color: '#87C483',
                    data: [4,6,4,6,8]
                }]
			}
        }
    }

    const barProps2 = () => {
        return {
            type: 'bar',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: '',
				option: {
                    title:{
                        text:'近5年科研经费到账情况',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                        x: 'center',
                        y: '10px'
                    },
                    grid:{
                        top: '25%',
                        left: '6%',
                        right: '8%',
                        bottom: '15%',
                        containLabel: true
                    },
                    axisLabel:{
                        color: '#FFF',
                    },
                    legend:{
                        data: ['国家级','省级'],
                        bottom: 5,
                        textStyle: {
                            color: '#FFF'
                        }
                    },
					xAxis: {
						type: 'category',
                        axisLine:{
                            show: false,
                        },
						data: ['2018','2019','2020','2021','2022']
					}
				},
				series: [{
                    name: '国家级',
				    type: 'bar',
                    color: '#3271FA',
                    data: [2,3,4,3,5]
                },{
                    name: '省级',
				    type: 'bar',
                    color: '#87C483',
                    data: [4,6,4,6,8]
                },{
                    name: '国家级',
				    type: 'line',
                    color: '#8EFDFF',
                    data: [2,3,4,3,5]
                },{
                    name: '省级',
				    type: 'line',
                    color: '#87C483',
                    data: [4,6,4,6,8]
                }]
			}
        }
    }

    const lineProps = () => {
        let series = [{
			name: '新进教师数',
			type: 'line',
            lineStyle:{
                color: '#E18B3A'
            },
            itemStyle:{
                color: '#E18B3A'
            },
			data: [45,52,59,67,80],
		},];
        return {
            type: 'line',
            chartsProp: {
				id: parseInt(Math.random()*10000),
				title: '近5年新进教师数',
				option: {
					type: 'value',
                    title:{
                        text: '近5年新进教师数',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                        x: 'center',
                        y: '10px'
                    },
                    grid:{
                        top: '25%',
                        left: '6%',
                        right: '8%',
                        bottom: '5%',
                        containLabel: true
                    },
                    axisLabel:{
                        color: '#FFF',
                    },
					xAxis: {
						type: 'category',
						boundaryGap: false,
                        axisLine:{
                            show: false,
                        },
						data: ['2018','2019','2020','2021','2022']
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
                    title: {
                        text: '按职称',
                        top: '40%',
                        left: '35%',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                    },
                    legend: {
                        show: false,
                    },
                    labelLine: {
                        length:20,
                        length2:50,
                    },
                    label:{
                        formatter: "{b}",
                        padding: [20, -25]
                    },

					color: ['#2E69EE', '#82E55C', '#F2FF54', '#DE649B'],
				},
				series: [{
					type: 'pie',
					radius: ['40%','65%'],
					center: ['50%', '50%'],
					data: [
						{ value: 100, name: '正高' },
						{ value: 80, name: '副高' },
						{ value: 50, name: '中级' },
                        { value: 50, name: '初级' },
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

    const pieProps2 = () => {
        return {
            type: 'pie',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: 'Pie Echarts',
				option: {
                    title: {
                        text: '按学历',
                        top: '40%',
                        left: '35%',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                    },
                    legend: {
                        show: false,
                    },
                    labelLine: {
                        length:20,
                        length2:50,
                    },
                    label:{
                        formatter: "{b}",
                        padding: [20, -25]
                    },

					color: ['#2E69EE', '#82E55C', '#F2FF54', '#DE649B'],
				},
				series: [{
					type: 'pie',
					radius: ['40%','65%'],
					center: ['50%', '50%'],
					data: [
						{ value: 100, name: '博士' },
						{ value: 80, name: '硕士' },
						{ value: 50, name: '本科' },
                        { value: 50, name: '其他' },
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

    const pieProps3 = () => {
        return {
            type: 'pie',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: 'Pie Echarts',
				option: {
                    title: {
                        text: '按培养\n层次',
                        top: '34%',
                        left: '47%',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                        textAlign: 'center'
                    },
                    legend: {
                        show: false,
                    },
                    labelLine: {
                        length:20,
                        length2:50,
                    },
                    label:{
                        formatter: "{b}",
                        padding: [20, -25]
                    },

					color: ['#2E69EE', '#82E55C', '#F2FF54', '#DE649B', '#76C2EB'],
				},
				series: [{
					type: 'pie',
					radius: ['40%','65%'],
					center: ['50%', '50%'],
					data: [
						{ value: 100, name: '本科生' },
						{ value: 80, name: '专科生' },
						{ value: 50, name: '研究生' },
                        { value: 50, name: '专升本' },
                        { value: 50, name: '其他' },
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

    const pieProps4 = () => {
        return {
            type: 'pie',
			chartsProp: {
				id: parseInt(Math.random()*10000),
				title: 'Pie Echarts',
				option: {
                    title: {
                        text: '按校区',
                        top: '40%',
                        left: '34%',
                        textStyle: {
                            color: '#FFF',
                            fontSize: 14,
                        },
                    },
                    legend: {
                        show: false,
                    },
                    labelLine: {
                        length:20,
                        length2:50,
                    },
                    label:{
                        formatter: "{b}",
                        padding: [20, -25]
                    },

					color: ['#2E69EE', '#82E55C', '#F2FF54', '#DE649B'],
				},
				series: [{
					type: 'pie',
					radius: ['40%','65%'],
					center: ['50%', '50%'],
					data: [
						{ value: 100, name: '拱宸桥' },
						{ value: 80, name: '杨汛桥' },
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
            {/* <Header></Header> */}
            <div className={selfCss.sreenMain}>
                <div className={selfCss.summary_column_1}>
                    <div className={selfCss.Box_1}>
                        <div className={selfCss.schoolLogo}></div>
                        <div className={selfCss.schoolInfo}>
                            <div className={selfCss.infoRow}>
                                <div className={selfCss.title}>校名<i></i></div>
                                <div className={selfCss.content}>浙江树人学院</div>
                            </div>
                            <div className={selfCss.infoRow}>
                                <div className={selfCss.title}>英文名<i></i></div>
                                <div className={selfCss.content}>Zhejiang Shuren University</div>
                            </div>
                            <div className={selfCss.infoRow}>
                                <div className={selfCss.title}>校训<i></i></div>
                                <div className={selfCss.content}>崇德重智、树人为本</div>
                            </div>
                            <div className={selfCss.infoRow}>
                                <div className={selfCss.title}>建校时间<i></i></div>
                                <div className={selfCss.content}>1984年</div>
                            </div>
                            <div className={selfCss.infoRow}>
                                <div className={selfCss.title}>办学历史<i></i></div>
                                <div className={selfCss.content}>xxx</div>
                            </div>
                        </div>
                        <div className={selfCss.presidentList}>
                            <div className={selfCss.presidentBox}>
                                <div className={selfCss.photo}>

                                </div>
                                <div className={selfCss.name}>
                                    党委书记：<span>xxx</span>
                                </div>
                            </div>
                            <div className={selfCss.presidentBox}>
                                <div className={selfCss.photo}>
                                    
                                </div>
                                <div className={selfCss.name}>
                                    校长：<span>xxx</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={[selfCss.Box_2, css.mt20].join(' ')}>
                        <Block title='发展大事记'></Block>
                    </div>
                </div>
                <div className={selfCss.summary_column_2}>
                    <div className={selfCss.summary_row_1}>
                        <div className={selfCss.Box_3}>
                            <Block title='办学条件'>
                                <div>
                                    <div className={selfCss.resourceList}>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>生师比</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon1} alt=''/>
                                                    <span className={selfCss.info}>17:1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>硕士及以上专任教师比例</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon2} style={{width:'30%'}} alt=''/>
                                                    <span className={selfCss.info}>95.33<i>%</i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>教学科研仪器设备值</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon3} style={{height:'30%',width:'25%'}} alt=''/>
                                                    <span className={selfCss.info}>2.64万<i>元</i><br/><i>生均:</i> 5000<i>元</i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>图书</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon4} style={{height:'30%',width:'25%'}} alt=''/>
                                                    <span className={selfCss.info}>190.76万<i>册</i><br/><i>生均:</i>1万<i>册</i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>本年度教学经费</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon5} style={{height:'30%',width:'25%'}} alt=''/>
                                                    <span className={selfCss.info}>2.64万<i>元</i><br/><i>生均:</i>2000<i>元</i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>本年度进图书量</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon6} style={{height:'30%',width:'25%'}} alt=''/>
                                                    <span className={selfCss.info}>3.15万<i>册</i><br/><i>生均:</i>200<i>册</i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={selfCss.resourceBox}>
                                            <div className={selfCss.title}>本年度新增教学科研设备</div>
                                            <div className={selfCss.box}>
                                                <div className={selfCss.icon}>
                                                    <img src={Icon7} style={{height:'30%',width:'25%'}} alt=''/>
                                                    <span className={selfCss.info}>2.64万<i>元</i><br/><i>占:</i>6.45<i>%</i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Block>
                        </div>
                        <div className={selfCss.Box_3}>
                            <Block title='申硕条件数据'>
                                
                            </Block>
                        </div>
                        <div className={selfCss.Box_3}>
                            <Block title='学科建设'>
                                <div className={selfCss.subjectType}>
                                    <div className={selfCss.subjectTit}>学科门类</div>
                                    <div className={selfCss.subjectVal}>
                                        50<span>类</span>
                                    </div>
                                </div>
                                <div className={selfCss.subjectList}>
                                    <div className={selfCss.subjectBox}>
                                        <div className={selfCss.subjectNum}>
                                            50<span>个</span>
                                        </div>
                                        本科专业
                                    </div>
                                    <div className={selfCss.subjectBox}>
                                        <div className={selfCss.subjectNum}>
                                            8<span>个</span>
                                        </div>
                                        一流专业
                                    </div>
                                    <div className={selfCss.subjectBox}>
                                        <div className={selfCss.subjectNum}>
                                            4<span>个</span>
                                        </div>
                                        一级学科
                                    </div>
                                    <div className={selfCss.subjectBox}>
                                        <div className={selfCss.subjectNum}>
                                            1<span>个</span>
                                        </div>
                                        一流学科
                                    </div>
                                </div>
                            </Block>
                        </div>
                    </div>
                    <div className={selfCss.summary_row_2}>
                        <div className={selfCss.Box_4}>
                            <Block title='教师概况及详情'>
                                <div className={selfCss.TeacherSummary}>
                                    <div className={selfCss.TLeft}>
                                        <div className={[css.fullBox, css.flexCol].join(' ')}>
                                            <div className={selfCss.summary}>
                                                <div className={selfCss.Tflex}>
                                                    <div className={selfCss.TsumBox}>
                                                        教师总数<span>2000</span>人
                                                    </div>
                                                    <div className={selfCss.TsumBox}>
                                                        国家级人才<span>100</span>人
                                                    </div>
                                                </div>
                                                <div className={selfCss.Tflex}>
                                                    <div className={selfCss.TsumBox}>
                                                        专任教师<span>1000</span>人
                                                    </div>
                                                    <div className={selfCss.TsumBox}>
                                                        省级人才<span>200</span>人
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={selfCss.tSummaryBox}>
                                                <div className={selfCss.cusBox}>
                                                    <Echart {...pieProps()}></Echart>
                                                </div>
                                                <div className={selfCss.cusBox}>
                                                    <Echart {...pieProps2()}></Echart>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={selfCss.TRight}>
                                        <div className={[css.fullBox, selfCss.chartBox].join(' ')}>
                                            <Echart {...lineProps()}></Echart>
                                        </div>
                                    </div>
                                </div>
                            </Block>
                        </div>
                        <div className={selfCss.Box_4}>
                            <Block title='学生概况及详情'>
                                <div className={selfCss.StudentSummary}>
                                    <div className={selfCss.SLeft}>
                                        <div className={selfCss.Stotal}>
                                            <div className={selfCss.StotalTit}>在校学生数</div>
                                            <div className={selfCss.StotalVal}>12345</div>
                                        </div>
                                        <div className={selfCss.StotalChart}>
                                            <div className={selfCss.StChart}>
                                                <Echart {...pieProps3()}></Echart>
                                            </div>
                                            <div className={selfCss.StChart}>
                                                <Echart {...pieProps4()}></Echart>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={selfCss.SRight}>
                                        <StudentInfoBox title='累计培养学生数' css={{height:'0.65rem'}}>
                                            <div className={selfCss.graduateNum}>22345</div>
                                        </StudentInfoBox>
                                        <div className={selfCss.SinfoCol}>
                                            <StudentInfoBox title='四级通过率' css={{height:'0.5rem',width:'47.5%'}}>
                                                <div className={[selfCss.otherNum, selfCss.font1].join(' ')}>1234</div>
                                            </StudentInfoBox>
                                            <StudentInfoBox title='就业率' css={{height:'0.5rem',width:'47.5%'}}>
                                                <div className={[selfCss.otherNum, selfCss.font2].join(' ')}>1234</div>
                                            </StudentInfoBox>
                                        </div>
                                        <div className={selfCss.SinfoCol}>
                                            <StudentInfoBox title='六级通过率' css={{height:'0.5rem',width:'47.5%'}}>
                                                <div className={[selfCss.otherNum, selfCss.font3].join(' ')}>1234</div>
                                            </StudentInfoBox>
                                            <StudentInfoBox title='考研率' css={{height:'0.5rem',width:'47.5%'}}>
                                                <div className={[selfCss.otherNum, selfCss.font4].join(' ')}>1234</div>
                                            </StudentInfoBox>
                                        </div>
                                    </div>
                                </div>
                            </Block>
                        </div>  
                    </div>
                    <div className={selfCss.summary_row_3}>
                        <div className={selfCss.Box_4}>
                            <Block title='国家级科研情况'>
                                <div className={[css.fullBox, selfCss.scientificBox].join(' ')}>
                                    <div className={selfCss.scientificChart}>
                                        <Echart {...barProps()}></Echart>
                                    </div>
                                    <div className={[selfCss.scientificChart, css.ml10].join(' ')}>
                                    <Echart {...barProps2()}></Echart>
                                    </div>
                                    <div className={selfCss.scientificList}>
                                        <div className={selfCss.infoBox}>
                                            <div className={selfCss.infoKey}>近5年科研<br/>获国家级奖</div>
                                            <div className={selfCss.infoVal}>8<span>项</span></div>
                                        </div>
                                        <div className={selfCss.infoBox}>
                                            <div className={selfCss.infoKey}>近5年科研省部<br/>级及以上奖励</div>
                                            <div className={selfCss.infoVal}>31<span>项</span></div>
                                        </div>
                                        <div className={selfCss.infoBox}>
                                            <div className={selfCss.infoKey}>近5年科研省部<br/>级重点学科数</div>
                                            <div className={selfCss.infoVal}>8<span>个</span></div>
                                        </div>
                                        <div className={selfCss.infoBox}>
                                            <div className={selfCss.infoKey}>近5年科研省部<br/>级重点实验室</div>
                                            <div className={selfCss.infoVal}>8<span>个</span></div>
                                        </div>
                                        <div className={selfCss.infoBox}>
                                            <div className={selfCss.infoKey} style={{width:'45%'}}>近5年年均<br/>科研经费</div>
                                            <div className={selfCss.infoVal}>8.8千万<span>元</span></div>
                                        </div>
                                    </div>
                                </div>
                            </Block>
                        </div>
                        <div className={selfCss.Box_4}>
                            <Block title='教学项目情况'>
                                <div className={selfCss.TinfoList}>
                                    <TeachInfoBox title='近5年国家级教学成功奖'>
                                        <div>3<span>个</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='近5年国家级课程'>
                                    <div>10<span>门</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='近5年国家级思政平台/课程'>
                                    <div>2<span>个</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='近5年省部级教学成功奖'>
                                    <div>15<span>个</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='近5年省部级课程'>
                                    <div>50<span>门</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='近5年国家级思政课程'>
                                    <div>50<span>门</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='近5年省部级思政平台/课程'>
                                    <div>2<span>个</span></div>
                                    </TeachInfoBox>
                                    <TeachInfoBox title='在线课程'>
                                    <div>3000<span>门</span></div>
                                    </TeachInfoBox>
                                </div>
                            </Block>
                        </div>                        
                    </div>
                </div>
                <div className={selfCss.summary_column_3}>
                    <div className={selfCss.Box_5}>
                        <Block title='校舍情况'>
                            <div className={selfCss.CampusMain}>
                                <CampusInfoBox css={{height:'1.23rem'}}>
                                    <div className={selfCss.title}>杨汛桥校区</div>
                                    <div className={selfCss.campusInfo}>
                                        <div className={selfCss.campusMap}>
                                            <img src={campus_yxq} alt='' />
                                        </div>
                                        <div className={selfCss.campusDetail}>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    占地面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    12345<span>(亩)</span>
                                                </div>
                                            </div>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    生均占地面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    2344<span>(亩)</span>
                                                </div>
                                            </div>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    校舍面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    12345<span>(亩)</span>
                                                </div>
                                            </div>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    生均校舍面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    2345<span>(亩)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CampusInfoBox>

                                <CampusInfoBox css={{height:'1.23rem',marginTop:'.05rem'}}>
                                    <div className={selfCss.title}>拱宸桥校区</div>
                                    <div className={selfCss.campusInfo}>
                                        <div className={selfCss.campusMap}>
                                            <img src={campus_gcq} alt='' />
                                        </div>
                                        <div className={selfCss.campusDetail}>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    占地面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    12345<span>(亩)</span>
                                                </div>
                                            </div>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    生均占地面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    2345<span>(亩)</span>
                                                </div>
                                            </div>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    校舍面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    12345<span>(亩)</span>
                                                </div>
                                            </div>
                                            <div className={selfCss.detailRow}>
                                                <div className={selfCss.Dtitle}>
                                                    生均校舍面积<i></i>
                                                </div>
                                                <div className={selfCss.Dcontent}>
                                                    2345<span>(亩)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CampusInfoBox>

                                <CampusInfoBox css={{height:'.53rem',marginTop:'.05rem'}}>
                                    <div className={selfCss.subCinfo}>
                                        <div className={selfCss.title}>教学科研及辅助用房</div>
                                        <div className={selfCss.content}>12345<span>(平方米)</span></div>
                                    </div>
                                    <div className={selfCss.subCinfo}>
                                        <div className={selfCss.title}>生均教学科研及辅助用房</div>
                                        <div className={selfCss.content}>12345<span>(平方米)</span></div>
                                    </div>
                                </CampusInfoBox>

                                <CampusInfoBox css={{height:'.53rem',marginTop:'.05rem'}}>
                                    <div className={selfCss.subCinfo}>
                                        <div className={selfCss.title}>宿舍面积</div>
                                        <div className={selfCss.content}>12345<span>(平方米)</span></div>
                                    </div>
                                    <div className={selfCss.subCinfo}>
                                        <div className={selfCss.title}>生均宿舍面积</div>
                                        <div className={selfCss.content}>12345<span>(平方米)</span></div>
                                    </div>
                                </CampusInfoBox>

                                <CampusInfoBox css={{height:'.53rem',marginTop:'.05rem'}}>
                                    <div className={selfCss.subCinfo}>
                                        <div className={selfCss.title}>行政及辅助用房</div>
                                        <div className={selfCss.content}>12345<span>(平方米)</span></div>
                                    </div>
                                    <div className={selfCss.subCinfo}>
                                        <div className={selfCss.title}>生均行政及辅助用房</div>
                                        <div className={selfCss.content}>12345<span>(平方米)</span></div>
                                    </div>
                                </CampusInfoBox>
                            </div>
                        </Block>
                    </div>
                    <div className={[selfCss.Box_6, css.mt20].join(' ')}>
                        <Block title='学校获得大奖' size='mini'>
                            <div className={selfCss.honorMain}>
                                <div className={selfCss.honorHeader}>
                                    <div className={selfCss.headerCell}>获奖人</div>
                                    <div className={selfCss.headerCell}>获奖名称</div>
                                    <div className={selfCss.headerCell}>获奖时间</div>
                                </div>
                                <div className={selfCss.honorBody}>
                                    <div className={selfCss.honorRow}>
                                        <div className={selfCss.CellTd}>管理员</div>
                                        <div className={selfCss.CellTd}>科技创新</div>
                                        <div className={selfCss.CellTd}>22-07-09</div>
                                    </div>
                                    <div className={selfCss.honorRow}>
                                        <div className={selfCss.CellTd}>管理员</div>
                                        <div className={selfCss.CellTd}>科技创新</div>
                                        <div className={selfCss.CellTd}>22-07-09</div>
                                    </div>
                                    <div className={selfCss.honorRow}>
                                        <div className={selfCss.CellTd}>管理员</div>
                                        <div className={selfCss.CellTd}>科技创新</div>
                                        <div className={selfCss.CellTd}>22-07-09</div>
                                    </div>
                                    <div className={selfCss.honorRow}>
                                        <div className={selfCss.CellTd}>管理员</div>
                                        <div className={selfCss.CellTd}>科技创新</div>
                                        <div className={selfCss.CellTd}>22-07-09</div>
                                    </div>
                                </div>
                            </div>
                        </Block>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

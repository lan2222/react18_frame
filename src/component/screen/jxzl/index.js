import React, { useEffect, useLayoutEffect,Component } from 'react';
import '../../../assets/css/jxzl.scss'
import Header from '../common/header';
import Footer from '../common/footer';
import Block from '../common/frame/block';
import Echart from '@/common/echarts'
import { Progress } from 'antd';
import css from '../screen.module.scss';

export default function Jxzl() {
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
        computeREM()
        return () => {
            let docEle = document.documentElement;
            docEle.removeAttribute('style');
        }
    }, [])
  return (
    <JxzlBox />
  )
}


class Head extends Component{
    constructor(props){
        super(props)
        this.title = props.title
    }
    render(){
        return(
            <div className='headBg'>
                <div className='title'>{this.title}</div>
            </div>
        )
    }
}

// echart

// 当日上课情况
class ClassAttend extends Component {
    state = {
        activeIndex:0,
    }
    schoolArea = ['拱宸桥校区','杨汛桥校区']
    changeAttend = (index)=>{
        return ()=>{
            this.setState({activeIndex:index})
        }
    }
    lineProps = ()=>{
        this.series = {
            type: 'line',
            chartsProp: {
				id: parseInt(Math.random()*10000),
                title:'',
				option: {
					type: 'value',
					yAxis: {
						axisLabel: {
                            color:'#fff'
						},
                        splitLine:{show:false}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
                        axisLabel:{
                            color:'#fff'
                        },
						data: ['8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00']
					}
				},
				series: {
                    type: 'line',
                    stack: 'Total',
                    areaStyle: {},
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [10, 20, 10, 40, 20, 30,40,20]
                }
			}
        }
        return this.series
    }
    studenNums = ()=>{
        return {
            type:'line',
            chartsProp:{
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    type: 'value',
                    legend: {
                        data:['学生数','老师数'],
                        right:'0',
                        orient:'vertical',
                        textStyle:{
                            color:'#fff',
                        }
                      },
					yAxis: [{
						axisLabel: {
                            color:'#fff'
						},
                        splitLine:{show:false}
					}],
					xAxis: [{
						type: 'category',
						boundaryGap: false,
                        axisLabel:{
                            color:'#fff'
                        },
						data: ['8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00']
					}]
                },
                series:[
                    {
                        name: '学生数',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        smooth: true,
                        data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                        name: '老师数',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        smooth: true,
                        data: [220, 182, 191, 234, 290, 330, 310]
                      },
                ]
            }
        }
    }
    attendNums = ()=>{
        return{
            type:'line',
            chartsProp:{
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    type: 'value',
                    legend: {
                        data:['学生数','老师数'],
                        right:'0',
                        orient:'vertical',
                        textStyle:{
                            color:'#fff',
                        }
                      },
					yAxis: [{
						axisLabel: {
                            color:'#fff'
						},
                        splitLine:{show:false}
					}],
					xAxis: [{
						type: 'category',
						boundaryGap: false,
                        axisLabel:{
                            color:'#fff'
                        },
						data: ['8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00']
					}]
                },
                series:[
                    {
                        name: '学生数',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        smooth: true,
                        data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                        name: '老师数',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                          focus: 'series'
                        },
                        smooth: true,
                        data: [220, 182, 191, 234, 290, 330, 310]
                      },
                ]
            }
        }
    }
    render(){
        return(
            <div className='classAttend flex flex-column'>
                <div className='classAttend-item currDay flex-1 flex flex-column'>
                    <Block className="head" title='发展大事记'></Block>
                    <div className='tabBox flex'>
                        {
                            this.schoolArea.map((item,index)=>{
                                return(
                                    <div className={`tabBox-item flex-1 ${this.state.activeIndex == index ? 'active' : ''}`} key={item} onClick={this.changeAttend(index)}>{item}</div>
                                )
                            })
                        }
                        
                    </div>
                    <div className='con flex-1'>
                        <div className='echartBox flex flex-column'>
                            <div className='echartBox-item flex flex-column'>
                                <Head title='今日上课课程/门'/>
                                <div className='echart flex-1'>
                                    <Echart {...this.lineProps()}></Echart>  
                                </div>
                            </div>
                            <div className='echartBox-item flex flex-column'>
                                <Head title='今日上课师生数/人'/>
                                <div className='echart flex-1'>
                                    <Echart {...this.studenNums()}></Echart>
                                </div>
                            </div>
                            <div className='echartBox-item flex flex-column'>
                                <Head title='今日考勤情况/人'/>
                                <div className='echart flex-1'>
                                    <Echart {...this.attendNums()}></Echart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='classAttend-item num'>
                    <div className='numBox flex flex-wrap'>
                        <div className='numBox-item'>
                            <div className='list flex flex-column justify-center'>
                                <Head title='学生今日活跃度'/>
                                <div className='textBox flex-1 flex align-center'>
                                    <label className='title'>12345</label>
                                    <span className={`icon up`}></span>
                                    <span className='nums'>31%</span>
                                </div>
                            </div>
                        </div>
                        <div className='numBox-item'>
                            <div className='list  flex flex-column justify-center'>
                                <Head title='学生七日活跃度'/>
                                <div className='textBox flex-1 flex align-center'>
                                    <label className='title'>12345</label>
                                    <span className={`icon up`}></span>
                                    <span className='nums'>31%</span>
                                </div>
                            </div>
                        </div>
                        <div className='numBox-item'>
                            <div className='list  flex flex-column justify-center'>
                                <Head title='今日在线教师数'/>
                                <div className='textBox flex-1 flex align-center'>
                                    <label className='title'>12345</label>
                                    <span className={`icon up`}></span>
                                    <span className='nums'>31%</span>
                                </div>
                            </div>
                        </div>
                        <div className='numBox-item'>
                            <div className='list flex flex-column justify-center'>
                                <Head title='今日在线学生数'/>
                                <div className='textBox flex-1 flex align-center'>
                                    <label className='title'>12345</label>
                                    <span className={`icon up`}></span>
                                    <span className='nums'>31%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// 课程建设概况
class CourseBuilding extends Component{
    pieProps = ()=>{
        return{
            type: 'line',
            chartsProp: {
				id: parseInt(Math.random()*10000),
                title:'',
                series:[
                    {
                        type: 'pie',
                        radius: '50%',
                        center:['30%','50%'],
                        label: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: '国家级一流课程' },
                            { value: 735, name: '省级一流课程' },
                            { value: 580, name: '校级课程' },
                        ],
                    }
                ],
                option:{
                    title: {
                        text: '课程建设情况',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 14 }
                    },
                    legend: { 
                        bottom: 'center',
                        right: '5%',
                        left:'60%',
                        itemWidth:10,
                        itemHeight:10,
                        orient:'vertical',
                        textStyle:{
                          color:'#fff'
                        },
                        
                        data:['国家级一流课程','省级一流课程','校级课程']
                    },
                }
            }
        }
    }
    courseProps = ()=>{
        return{
            type: 'line',
            chartsProp: {
				id: parseInt(Math.random()*10000),
                title:'',
                series:[
                    {
                        type: 'pie',
                        radius: '50%',
                        center:['30%','50%'],
                        label: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: '省级思政示范课程' },
                            { value: 735, name: '校级思政示范课程' },
                        ],
                    }
                ],
                option:{
                    title: {
                        text: '思政课程情况',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 14 }
                    },
                    legend: { 
                        bottom: 'center',
                        right: '5%',
                        itemWidth:10,
                        itemHeight:10,
                        orient:'vertical',
                        textStyle:{
                          color:'#fff'
                        },
                        data:['省级思政示范课程','校级思政示范课程']
                    },
                }
            }
        }
    }
    barProps = ()=>{
        return{
            type:'bar',
            chartsProp:{
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    title: {
                        text: '教学经费情况',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 14 }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisLabel:{
                                color:'#fff'
                            },
                            data: ['2018','2019','2020','2021','2022']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel:{
                                color:'#fff'
                            }
                        }
                    ],
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '5%',
                        top: '18%',
                        containLabel: true
                    },
                    legend:{
                        show:false
                    }
                },
                series:[
                    {
                        name: '教育经费详情',
                        type: 'bar',
                        barWidth: 15,
                        label: {
                            show: false,
                        },
                        data: [110, 154, 45, 144, 144],
                    },
                    {
                        name: '累计',
                        type: 'line',
                        symbolSize: 3,
                        symbol: 'emptyCircle',
                        smooth: true,
                        data: [110, 22, 222, 33, 444],
                      },
                ]
            }
        }
    }
    render(){
        return(
            <div className='CourseBuilding flex flex-column'>
                <div className='CourseBuilding-item build  flex flex-column'>
                    <Block className="head" title='课程建设概况'></Block>
                    <div className='CourseBuilding-content flex flex-1 flex-column'>
                        <div className='echart flex-1 mb10'>
                            <Echart {...this.pieProps()}></Echart>
                        </div>
                        <div className='echart flex-1'>
                            <Echart {...this.courseProps()}></Echart>
                        </div>
                    </div>
                </div>
                <div className='CourseBuilding-item condition  flex flex-column'>
                    <Block className='head'  title='教学条件'></Block>
                    <div className='CourseBuilding-content flex flex-1 flex-column'>
                        <div className='echart flex-1 mb10'>
                            <div className='echart-item flex'>
                                <div className='box flex'>
                                    <div className='title'>省级重点支持现代产业学院</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>21</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>行业学院</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>12</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>省部级研究基地</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>3</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className='echart-item flex'>
                                <div className='box flex'>
                                    <div className='title'>省行业平台</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>2</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>校级研究机构及平台</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>25</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>浙江省重点实验室</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>1</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className='echart-item flex'>
                                <div className='box flex'>
                                    <div className='title'>省级实验教学示范中心</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>4</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>省级重点示范中心建设项目</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>2</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>省级虚拟仿真实验教学项目</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>10</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className='echart-item flex'>
                                <div className='box flex'>
                                    <div className='title'>校外实习实训基地</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>261</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>国家级大学生校外实践教育基地</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>1</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>省级大学生校外实践教育基地</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>3</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                                <div className='box flex'>
                                    <div className='title'>省级产教融合示范基地</div>
                                    <div className='nums'>
                                       <div className='nbox'>
                                        <label className='value'>2</label>
                                            <label className='dw'>个</label>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='echart flex-1'>
                            <Echart {...this.barProps()}></Echart>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// 专业概况
class Professional extends Component{
    barProps = ()=>{
        return{
            type:'bar',
            chartsProp: {
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    legend: { 
                        bottom: 0,
                        left: 'center',
                        itemWidth:10,
                        itemHeight:10,
                        textStyle:{
                          color:'#fff',
                          fontSize:8,
                        }
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        top: '18%',
                        containLabel: true
                    },
                    title: {
                        text: '教学成果奖情况',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 10 }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                color:'#fff',
                                fontSize:8,
                            },
                            data: ['2018', '2019', '2020', '2021', '2022']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                color:'#fff',
                                fontSize:8,
                            },
                        }
                    ],
                },
                series:[
                    {
                        name: '国家级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:5,
                        label:{fontSize:8,},
                        data: [40, 50, 30, 70, 80]
                    },
                    {
                        name: '省级',
                        type: 'bar',
                        label:{fontSize:8,},
                        barGap: 0,
                        barWidth:5,
                        data: [50, 60, 40, 70, 80]
                    },
                    {
                        name: '厅局级',
                        type: 'bar',
                        label:{fontSize:8,},
                        barGap: 0,
                        barWidth:5,
                        data: [60, 70, 50, 70, 80]
                    },
                    {
                        name: '校级',
                        type: 'bar',
                        label:{fontSize:8,},
                        barGap: 0,
                        barWidth:5,
                        data: [70, 80, 60, 70, 80]
                    }
                ]
            }
        }
    }
    barProps1 = ()=>{
        return{
            type:'bar',
            chartsProp: {
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    legend: { 
                        bottom: 0,
                        left: 'center',
                        itemWidth:10,
                        itemHeight:10,
                        textStyle:{
                          color:'#fff',
                          fontSize:8,
                        },
                        show:false,
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        top: '18%',
                        containLabel: true
                    },
                    title: {
                        text: '读研率',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 10 }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                color:'#fff',
                                fontSize:8,
                            },
                            data: ['2018', '2019', '2020', '2021', '2022']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                color:'#fff',
                                fontSize:8,
                            },
                        }
                    ],
                },
                series:[
                    {
                        name: '国家级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        label:{fontSize:8,},
                        data: [40, 50, 30, 70, 80]
                    }
                ]
            }
        }
    }
    lineProps = ()=>{
        return{
            type:'line',
            chartsProp:{
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    legend: { 
                        bottom: 0,
                        left: 'center',
                        textStyle:{
                          color:'#fff',
                          fontSize:8,
                        },
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        top: '18%',
                        containLabel: true
                    },
                    title: {
                        text: '学生满意度',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 10 }
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            color:'#fff',
                            fontSize:8,
                        },
                        data: ['2018', '2019', '2020', '2021', '2022']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            color:'#fff',
                            fontSize:8,
                        },
                    }
                },
                series:[
                    {
                        name: '毕业生',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                        name: '全校学生',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                      }
                ]
            }
        }
    }
    lineProps1 = ()=>{
        return{
            type:'bar',
            chartsProp:{
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    legend: { 
                        bottom: 0,
                        left: 'center',
                        itemWidth:10,
                        itemHeight:10,
                        textStyle:{
                          color:'#fff',
                          fontSize:8,
                        },
                        data:['我校创业率','全省平均创业率','在全省本科高校排名']
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        top: '18%',
                        containLabel: true
                    },
                    title: {
                        text: '近年来创业率',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 10 }
                    },
                    xAxis: [{
                        type: 'category',
                        axisLabel: {
                            color:'#fff',
                            fontSize:8,
                        },
                        data: ['2018', '2019', '2020', '2021', '2022']
                    }],
                    yAxis:[{
                        type: 'value',
                        axisLabel: {
                            color:'#fff',
                            fontSize:8,
                        },
                    }]
                },
                series:[
                    {
                        name: '我校创业率',
                        type: 'bar',
                        stack:1,
                        stack: 'Total',
                        barWidth:10,
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '全省平均创业率',
                        type: 'bar',
                        stack:1,
                        barWidth:10,
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '在全省本科高校排名',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div className='Professional flex flex-column'>
                <div className='Professional-item major flex flex-column'>
                    <Block className='head'  title='专业概况'></Block>
                    <div className='Professional-content flex-1'>
                        <div className='circle-box flex'>
                            <div className='circle circle1'>
                                <label className='title'>本科专业</label>
                                <label className='value'>
                                    <span className='val'>50</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                            <div className='circle circle2'>
                                <label className='title'>专科专业</label>
                                <label className='value'>
                                    <span className='val'>8</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                        </div>
                        <div className='circle-box flex'>
                            <div className='circle circle3'>
                                <label className='title'>国家一流专业</label>
                                <label className='value'>
                                    <span className='val'>50</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                            <div className='circle circle4'>
                                <label className='title'>国家特色与优势专业</label>
                                <label className='value'>
                                    <span className='val'>50</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                            <div className='circle circle5'>
                                <label className='title'>省重点专业</label>
                                <label className='value'>
                                    <span className='val'>50</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                        </div>
                        <div className='circle-box flex'>
                            <div className='circle circle6'>
                                <label className='title'>省一流专业</label>
                                <label className='value'>
                                    <span className='val'>50</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                            <div className='circle circle7'>
                                <label className='title'>省特色与优势专业</label>
                                <label className='value'>
                                    <span className='val'>50</span>
                                    <span className='dw'>个</span>
                                </label>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='Professional-item study flex flex-column'>
                    <Block className='head'  title='学习效果概况'></Block>
                    <div className='Professional-content flex flex-wrap flex-1'>
                        <div className='list'>
                            <div className='list-box'>
                                <Echart {...this.barProps()}></Echart> 
                            </div>
                        </div>
                        <div className='list'>
                            <div className='list-box'>
                                <Echart {...this.barProps1()}></Echart> 
                            </div>
                        </div>
                        <div className='list'>
                            <div className='list-box'>
                                <Echart {...this.lineProps()}></Echart> 
                            </div>
                        </div>
                        <div className='list'>
                            <div className='list-box'>
                                <Echart {...this.lineProps1()}></Echart> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Professional-item teach flex flex-column'>
                    <Block className="head" title='教考分离'></Block>
                    <div className='Professional-content flex flex-wrap flex-1'>
                        <div className='list flex flex-column'>
                            <div className='header'>公共基础平台</div>
                            <div className='list-box flex-1 flex align-center justify-center'>
                                <div className='icon '></div>
                                <div className='textBox'>
                                    <div className='textBox-item flex align-center'>
                                        <label className='value'>12121213</label>
                                        <label className='dw'>门数</label>
                                    </div>
                                    <div className='textBox-item flex align-center'>
                                        <label className='value'>21212212</label>
                                        <label className='dw'>门次数</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='list flex flex-column'>
                             <div className='header'>学科基础平台</div>
                             <div className='list-box flex-1 flex align-center justify-center'>
                                <div className='icon course'></div>
                                <div className='textBox'>
                                    <div className='textBox-item flex align-center'>
                                        <label className='value'>13123123123</label>
                                        <label className='dw'>门数</label>
                                    </div>
                                    <div className='textBox-item flex align-center'>
                                        <label className='value'>23313123124</label>
                                        <label className='dw'>门次数</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// 教学项目概况
class Project extends Component{
    barProps = ()=>{
        return{
            type: 'bar',
            chartsProp: {
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    legend: { 
                        bottom: 0,
                        left: 'center',
                        itemWidth:10,
                        itemHeight:10,
                        textStyle:{
                          color:'#fff'
                        }
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        top: '18%',
                        containLabel: true
                    },
                    title: {
                        text: '教学成果奖情况',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 14 }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                color:'#fff'
                            },
                            data: ['2018', '2019', '2020', '2021', '2022']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                color:'#fff'
                            },
                        }
                    ],
                },
                series:[
                    {
                        name: '国家级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [40, 50, 30, 70, 80]
                    },
                    {
                        name: '省级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [50, 60, 40, 70, 80]
                    },
                    {
                        name: '厅局级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [60, 70, 50, 70, 80]
                    },
                    {
                        name: '校级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [70, 80, 60, 70, 80]
                    }
                ]
            }
        }
    }
    itemProps = ()=>{
        return{
            type: 'bar',
            chartsProp: {
                id: parseInt(Math.random()*10000),
                title:'',
                option:{
                    legend: { 
                        bottom: 0,
                        left: 'center',
                        itemWidth:10,
                        itemHeight:10,
                        textStyle:{
                          color:'#fff'
                        }
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '15%',
                        top: '18%',
                        containLabel: true
                    },
                    title: {
                        text: '教学项目情况',
                        top: '3%',
                        left: 'center',
                        textStyle: { color: '#fff', fontSize: 14 }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                color:'#fff'
                            },
                            data: ['2018', '2019', '2020', '2021', '2022']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                color:'#fff'
                            },
                        }
                    ],
                },
                series:[
                    {
                        name: '国家级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [40, 50, 30, 70, 80]
                    },
                    {
                        name: '省级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [50, 60, 40, 70, 80]
                    },
                    {
                        name: '厅局级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [60, 70, 50, 70, 80]
                    },
                    {
                        name: '校级',
                        type: 'bar',
                        barGap: 0,
                        barWidth:10,
                        data: [70, 80, 60, 70, 80]
                    }
                ]
            }
        }
    }
    state = {
        activeIndex:0,
    }
    type = ['四级通过率','六级通过率','体测通过率','读研率']
    changeType = (index)=>{
        return ()=>{
            this.setState({activeIndex:index})
        }
    }
    colleges = [
        {
            mc:'管理学院',
            value:98
        },
        {
            mc:'城建学院',
            value:97
        },
        {
            mc:'人文与外国语学院',
            value:96
        },
        {
            mc:'信息科技学院',
            value:95
        },
        {
            mc:'生物与环境工程学院',
            value:94
        },
        {
            mc:'现代服务业学院',
            value:93
        },
        {
            mc:'艺术学院',
            value:92
        },
        {
            mc:'树兰国际医学院',
            value:91
        },
    ]
    render(){
        return(
            <div className='Project flex flex-column'>
                <div className='Project-item proj flex flex-column'>
                    <Block className='head' title='教学项目概况'></Block>
                    <div className='Project-content flex-1 flex flex-column'>
                        <div className='list mb10'>
                            <Echart {...this.barProps()}></Echart>  
                        </div>
                        <div className='list'>
                            <Echart {...this.itemProps()}></Echart>  
                        </div>
                    </div>
                </div>
                <div className='Project-item rate flex flex-column'>
                    <div className='tabBox flex'>
                            {
                                this.type.map((item,index)=>{
                                    return(
                                        <div className={`tabBox-item flex-1 ${this.state.activeIndex == index ? 'active' : ''}`} key={item} onClick={this.changeType(index)}>{item}</div>
                                    )
                                })
                            }
                            
                    </div>
                    <div className='echart flex-1'>
                        {
                            this.colleges.map((item,index)=>{
                                return(
                                    <div className='echart-item'>
                                        <div className='head'>
                                            <label className='title'>NO{index + 1}.</label>
                                            <label className='mc'>{item.mc}</label>
                                        </div>
                                        <div className='con'>
                                            <Progress strokeColor={{'0%': '#00a1e9','100%': '#005ade'}} percent={item.value} format={percent => `${percent}%`}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

// 学生总数
class Person extends Component{
    state = {
        activeIndex:0,
    }
    type = ['学生总数','教师总数']
    changeType = (index)=>{
        return ()=>{
            this.setState({activeIndex:index})
        }
    }
    render(){
        return(
            <div className='Person flex flex-column'>
                <div className='Person-item student flex flex-column'>
                    <div className='tabBox flex'>
                            {
                                this.type.map((item,index)=>{
                                    return(
                                        <div className={`tabBox-item flex-1 ${this.state.activeIndex == index ? 'active' : ''}`} key={item} onClick={this.changeType(index)}>{item}</div>
                                    )
                                })
                            }
                    </div>
                    <div className='echart flex-1'>
                        <div className='head'>
                            <div className='list'>
                                <div className='head-item'>
                                    <span className='icon'></span>
                                    <span className='title'>研究生</span>
                                </div>
                            </div>
                            <div className='ms'>总人数</div>
                        </div>
                        <div className='con'>
                            <div className='echart-item'>
                                <div className='text'>
                                    <label className='title'>NO1.</label>
                                    <label className='title'>管理学院</label>
                                    <label className='ms'>总人数</label>
                                </div>
                                <div className='process flex'>
                                    <div className='process-item'>55%</div>
                                    <div className='process-item'>55%</div>
                                    <div className='process-item'>55%</div>
                                    <div className='process-item'>55%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Person-item resources'>
                    <div className='numBox flex flex-wrap'>
                        <div className='numBox-item'>
                            <div className='list flex flex-column justify-center'>
                                <Head title='网络课程数'/>
                                <div className='textBox flex-1 flex align-center justify-center'>
                                    <label className='title'>12345</label>
                                </div>
                            </div>
                        </div>
                        <div className='numBox-item'>
                            <div className='list  flex flex-column justify-center'>
                                <Head title='网络教学班'/>
                                <div className='textBox flex-1 flex align-center justify-center'>
                                    <label className='title'>12345</label>
                                </div>
                            </div>
                        </div>
                        <div className='numBox-item h60'>
                            <div className='list  flex flex-column justify-center'>
                                <Head title='全校教学题库量'/>
                                <div className='textBox flex-1 flex align-center flex-column'>
                                    <label className='title'>12345</label>
                                    <div className='more'>
                                        <label className='more-title'>题库数最多课程</label>
                                        <label className='title'>电工技术</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='numBox-item h60'>
                            <div className='list flex flex-column justify-center'>
                                <Head title='全校资源数'/>
                                <div className='textBox flex-1 flex align-center flex-column '>
                                    <label className='title'>12345</label>
                                    <div className='more flex flex-wrap'>
                                        <div className='text-item'>
                                            <label className='bt'>图片</label>
                                            <label className='val'>1234567</label>
                                        </div>
                                        <div className='text-item'>
                                            <label className='bt'>音频</label>
                                            <label className='val'>12345</label>
                                        </div>
                                        <div className='text-item'>
                                            <label className='bt'>文本</label>
                                            <label className='val'>12345</label>
                                        </div>
                                        <div className='text-item'>
                                            <label className='bt'>视频</label>
                                            <label className='val'>12345</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



class JxzlBox extends Component {
  render() {
    return (
      <div className='layoutBox flex flex-column bg'>
        <Header>浙江树人学院教学总览</Header>
        <div className='content flex flex-1'>
            <div className='content-item'>
                <ClassAttend />
            </div>
            <div className='content-item per'>
                <CourseBuilding />
            </div>
            <div className='content-item per'>
                <Professional />
            </div>
            <div className='content-item'>
                <Project />
            </div>
            <div className='content-item'>
                <Person />
            </div>
        </div>
        <Footer>
            <div className={css.FooterNavList}>
                <div className={[css.NavBox, css.nav_1].join(' ')}>
                    <div className={css.NavName}>教职工数</div>
                    <div className={css.NavContent}>1234</div>
                </div>
                <div className={[css.NavBox, css.nav_2].join(' ')}>
                    <div className={css.NavName}>学生数</div>
                    <div className={css.NavContent}>1234</div>      
                </div>
                <div className={[css.NavBox, css.nav_4,'foot_3'].join(' ')}>
                    <div className={css.NavName}>二级学院</div>
                    <div className={`${css.NavContent} value`}>1234</div>   
                </div>
                <div className={[css.NavBox, css.nav_5,'foot_4'].join(' ')}>
                    <div className={css.NavName}>行政班级数</div>
                    <div className={`${css.NavContent} value`}>1234</div>    
                </div>
                <div className={[css.NavBox, 'foot_5'].join(' ')}>
                    <div className={css.NavName}>本学期课程数</div>
                    <div className={`${css.NavContent} value`}>1234</div>   
                </div>
                <div className={[css.NavBox, 'foot_6'].join(' ')}>
                    <div className={css.NavName}>教授上课率</div>
                    <div className={`${css.NavContent} value`}>1234</div>   
                </div>
                <div className={[css.NavBox, 'foot_7'].join(' ')}>
                    <div className={css.NavName}>教学项目数</div>
                    <div className={`${css.NavContent} value`}>1234</div>  
                </div>
                <div className={[css.NavBox, 'foot_8'].join(' ')}>
                    <div className={css.NavName}>教学成果获奖数</div>
                    <div className={`${css.NavContent} value`}>1234</div>   
                </div>
                <div className={[css.NavBox, 'foot_9'].join(' ')}>
                    <div className={css.NavName}>学科竞赛数</div>
                    <div className={`${css.NavContent} value`}>1234</div>     
                </div>
            </div>
        </Footer>
      </div>
    )
  }
}

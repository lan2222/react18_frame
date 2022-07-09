import React, { useEffect, useLayoutEffect,Component } from 'react';
import '../../../assets/css/jxzl.scss'

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
        return () => {
            let docEle = document.documentElement;
            docEle.removeAttribute('style');
        }
    }, [])
  return (
    <JxzlBox />
  )
}

// 当日上课情况
class ClassAttend extends Component {
    render(){
        return(
            <div className='classAttend flex flex-column'>
                <div className='classAttend-item currDay flex-1'>
                    3232
                </div>
                <div className='classAttend-item num'>
                    32323
                </div>
            </div>
        )
    }
}


// 课程建设概况
class CourseBuilding extends Component{
    render(){
        return(
            <div className='CourseBuilding flex flex-column'>
                <div className='CourseBuilding-item build'></div>
                <div className='CourseBuilding-item condition'></div>
            </div>
        )
    }
}


// 专业概况
class Professional extends Component{
    render(){
        return(
            <div className='Professional flex flex-column'>
                <div className='Professional-item major'></div>
                <div className='Professional-item study'></div>
                <div className='Professional-item teach'></div>
            </div>
        )
    }
}


// 教学项目概况
class Project extends Component{
    render(){
        return(
            <div className='Project flex flex-column'>
                <div className='Project-item proj'>12121</div>
                <div className='Project-item rate'>wewewe</div>
            </div>
        )
    }
}

// 学生总数
class Person extends Component{
    render(){
        return(
            <div className='Person flex flex-column'>
                <div className='Person-item student'>
                    3131231
                </div>
                <div className='Person-item resources'>
                    31231231
                </div>
            </div>
        )
    }
}



class JxzlBox extends Component {
  render() {
    return (
      <div className='layoutBox flex flex-column'>
        <div className='header'>header</div>
        <div className='content flex flex-1'>
            <div className='content-item'>
                <ClassAttend />
            </div>
            <div className='content-item'>
                <CourseBuilding />
            </div>
            <div className='content-item'>
                <Professional />
            </div>
            <div className='content-item'>
                <Project />
            </div>
            <div className='content-item'>
                <Person />
            </div>
        </div>
        <div className='footer'>footer</div>
      </div>
    )
  }
}

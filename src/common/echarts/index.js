import React, { memo } from 'react';
import Bar from './bar';

const Echart = memo(({type, chartsProp}) => {

    switch(type){
        case 'bar':
            return <Bar {...chartsProp}></Bar>
        default:
            return <div>图表加载失败...</div>        
    }
})

export default Echart
import React, { memo } from 'react';
import Bar from './bar';

const Echart = memo(({type, chartsProp}) => {
  return (
    <>
        <Bar {...chartsProp}></Bar>
    </>
  )
})

export default Echart
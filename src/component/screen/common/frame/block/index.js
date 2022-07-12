import React from 'react';
import css from '../../../screen.module.scss';

export default function Block({title, size, children}) {
  return (
    <div className={css.fullBox}>
        <div className={css.block_header}>
            <div className={css.dot}>{title}</div>
            <div style={{width:size?'.58rem':'1rem'}} className={css.flag}></div>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

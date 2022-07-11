import React from 'react';
import css from '../../../screen.module.scss';

export default function Block({title, children}) {
  return (
    <div className={css.fullBox}>
        <div className={css.block_header}>
            <div className={css.dot}>{title}</div>
            <div className={css.flag}></div>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

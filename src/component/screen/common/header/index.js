import React from 'react'
import css from '../../screen.module.scss';

export default function Header({children}) {
    console.log(children)
  return (
    <div className={css.Header}>
        <div className={css.title}>
            {children}
        </div>
    </div>
  )
}

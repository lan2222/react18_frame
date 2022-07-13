import React from 'react';
import css from '../../screen.module.scss';

export default function Footer({children}) {
    return (
        <div className={css.Footer}>
            <div className={css.FooterLogo}></div>
            {children}
            <div className={css.FooterQR}></div>
        </div>
    )
}

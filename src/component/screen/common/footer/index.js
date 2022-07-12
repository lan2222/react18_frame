import React from 'react';
import css from '../../screen.module.scss';

export default function Footer() {
    return (
        <div className={css.Footer}>
            <div className={css.FooterLogo}></div>
            <div className={css.FooterNavList}>
                <div className={[css.NavBox, css.nav_1].join(' ')}>
                    <div className={css.NavName}>教职工数</div>
                    <div className={css.NavContent}>1234</div>
                </div>
                <div className={[css.NavBox, css.nav_2].join(' ')}>
                    <div className={css.NavName}>学生数</div>
                    <div className={css.NavContent}>1234</div>      
                </div>
                <div className={[css.NavBox, css.nav_3].join(' ')}>
                    <div className={css.NavName}>本科专业</div>
                    <div className={css.NavContent}>1234</div>    
                </div>
                <div className={[css.NavBox, css.nav_4].join(' ')}>
                    <div className={css.NavName}>二级学院</div>
                    <div className={css.NavContent}>1234</div>   
                </div>
                <div className={[css.NavBox, css.nav_5].join(' ')}>
                    <div className={css.NavName}>行业学院</div>
                    <div className={css.NavContent}>1234</div>       
                </div>
                <div className={[css.NavBox, css.nav_6].join(' ')}>
                    <div className={css.NavName}>教学仪器总值</div>
                    <div className={css.NavContent}>1234</div>    
                </div>
                <div className={[css.NavBox, css.nav_7].join(' ')}>
                    <div className={css.NavName}>图书馆藏书</div>
                    <div className={css.NavContent}>1234</div>      
                </div>
                <div className={[css.NavBox, css.nav_8].join(' ')}>
                    <div className={css.NavName}>总建筑面积</div>
                    <div className={css.NavContent}>1234</div>       
                </div>
            </div>
            <div className={css.FooterQR}></div>
        </div>
    )
}

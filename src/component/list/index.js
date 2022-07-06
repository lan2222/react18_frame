import React, { memo } from 'react'
import PermissionHoc from '@/utils/permissionHoc';
import { connect } from 'react-redux';

const List = memo(({app}) => {
    return (
        <div className='Component_Page'>这里是 list 页面</div>
    )
})

const mapStateToProps = (state) => {
    const { app } = state;
    return { app };
}

export default connect(mapStateToProps)(PermissionHoc('List')(List))
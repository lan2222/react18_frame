import React, { memo } from 'react'
import PermissionHoc from '@/utils/permissionHoc';
import { connect } from 'react-redux';

const List = memo(({app}) => {
    console.log(app,'app')
    console.log('List Page')
    return (
        <div className='Component_Page'>这里是 list 页面</div>
    )
})

const mapStateToProps = (state) => {
    console.log(state, 'statestatestatestate')
    const { app } = state;
    return { app };
}

export default connect(mapStateToProps)(PermissionHoc('List')(List))
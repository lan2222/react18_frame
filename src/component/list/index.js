import React, { memo, useEffect } from 'react'
import PermissionHoc from '@/utils/permissionHoc';
import { connect } from 'react-redux';
import { QuseQuery, useQuery } from 'react-query';
import { getListQuery } from '@/api/app.js'

const List = memo(({app}) => {

    const { isLoading, isError, data, error } = useQuery(['getPostList',{page: 2, limit: 5}], getListQuery);
    
    return (
        <div className='Component_Page'>{isLoading}这里是 list 页面
        {isError}
        {!isLoading && data.data.map(item => {
            return <div key={item.id}>{item.title}</div>
        })}
        {error}
        </div>
    )
})

const mapStateToProps = (state) => {
    const { app } = state;
    return { app };
}

export default connect(mapStateToProps)(PermissionHoc('List')(List))
import React, { memo } from 'react'
import PermissionHoc from '../../utils/permissionHoc'

const Home = memo(() => {
  return (
    <div className='Component_Page'>这里是 home 组件内容</div>
  )
})
export default PermissionHoc('Admin')(Home)

import React, { memo } from 'react'
import PermissionHoc from '../../utils/permissionHoc'

const Other = memo(() => {
  return (
    <div className='Component_Page'>这里是 Other 组件内容</div>
  )
})
export default PermissionHoc('Other')(Other)

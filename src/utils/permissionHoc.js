import { PermissionContext } from "../App";

export default function PermissionHoc (authorization) {
    return function(Component) {
        return function Index(props) {
            const matchPermission = (value,list) => list.indexOf(value) 
            return  (
            <PermissionContext.Consumer>
                {(permissionList) => {
                    // console.log(permissionList, 'permissionList')
                    return matchPermission(authorization,permissionList) >= 0 ? <Component {...props}></Component> : <div>你无权限</div>
                }
                }
            </PermissionContext.Consumer>
            )
        }
    } 
}

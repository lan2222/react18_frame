import React, { useContext } from "react";
import { PermissionContext } from "../App";
// import { connect } from 'react-redux';

// const ThemeContext = React.createContext(null)

export default function PermissionHoc (authorization) {
    // const contextValue = useContext(ThemeContext);

    return function(Component) {
        return function Index(props) {
            // console.log(contextValue, 'contextValue')
            // const ThemeContext = React.createContext(null)
            // console.log(props, 'props')
            // console.log()
            const matchPermission =(value,list)=> list.indexOf(value) 
            // 这里做权限判断 <Permission.Consumer>
            return  (
            <PermissionContext.Consumer>
                {(permissionList) => 
                    matchPermission(authorization,permissionList) >= 0 ? <Component {...props}></Component> : <div>222</div>
                }
                {/* <Component></Component> */}
            </PermissionContext.Consumer>
            )
        }
    } 
}

// const mapStateToProps = (state) => {
//     console.log(state, 'statestatestatestate')
//     const { app } = state;
//     return { app };
// }

// // function mapDispatchToProps () {
// //     return {
// //         abc: () => {
// //             console.log('2222')
// //         }
// //     }
// // }

// export default connect(mapStateToProps)(PermissionHoc)
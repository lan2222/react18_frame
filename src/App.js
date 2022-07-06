import { useState, memo, useLayoutEffect, createContext } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Routers from './routers';
import { BrowserRouter } from "react-router-dom";
// import { Suspense } from 'react';
// import { getList } from '@/api/app.js';
import { fetchPermission } from './store/appSlice';

export const PermissionContext = createContext([]);

const Permission = memo(({ children }) => {

		const [permission, setPermission] = useState([])
		const dispatch = useDispatch();

		useLayoutEffect(() => {
			const getPermission = async () => {
				let res = await dispatch(fetchPermission({
					page: 1,
					limit: 5,
				}))
				setPermission(res);
				setPermission(['Admin','List'])
			}
			const permission = store.getState().app.permission;
			if(permission.length===0){
				getPermission();
			}
		}, [dispatch])
	
	return <PermissionContext.Provider value={permission}>{children}</PermissionContext.Provider>
})

function App() {
	return (
		<Provider store={store}>
			<Permission>
				<BrowserRouter>
					{/* <Suspense fallback={<div>loading</div>}> */}
						<Routers />
					{/* </Suspense> */}
				</BrowserRouter>
			</Permission>
		</Provider>
	);
}

export default App;

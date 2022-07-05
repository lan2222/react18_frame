import { useEffect, useState, memo, useLayoutEffect, createContext } from 'react';
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
		// console.log('AAAAA')
		
		useLayoutEffect(() => {

			const getPermission = async () => {
				let abc = await dispatch(fetchPermission({
					page: 1,
					limit: 5,
				}))
				// setPermission(abc);
				setPermission(['Admin','List'])
				// console.log(abc, 'abc')
			}
			
			console.log('BBBB')
			const permission = store.getState().app.permission;
			if(permission.length===0){
				getPermission();
			}

		}, [dispatch])
	
	return <PermissionContext.Provider value={permission}>{children}</PermissionContext.Provider>
})

function App() {
	
	// const [app, setApp] = useState({})
	console.log('first')

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

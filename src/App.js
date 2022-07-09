import { useState, memo, useLayoutEffect, createContext, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Routers from './routers';
import { BrowserRouter } from "react-router-dom";
// import { Suspense } from 'react';
// import { getList } from '@/api/app.js';
import { fetchPermission } from './store/appSlice';
import { QueryClientProvider, QueryClient } from 'react-query';

export const PermissionContext = createContext([]);

const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			refetchOnWindowFocus: true,
			// 缓存的时间...
			staleTime: 5 * 60 * 1000,
			retry: 0
		}
	}
})

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
		
		useEffect(() => {
			console.log('App s useEffect')
		}, [])
		
	
	return <PermissionContext.Provider value={permission}>{children}</PermissionContext.Provider>
})

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Permission>
					<BrowserRouter>
						{/* <Suspense fallback={<div>loading</div>}> */}
							<Routers />
						{/* </Suspense> */}
					</BrowserRouter>
				</Permission>
			</QueryClientProvider>
		</Provider>
	);
}

export default App;

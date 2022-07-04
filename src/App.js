import { Provider } from 'react-redux';
import store from './store';
import Routers from './routers';

function App() {
	return (
		<Provider store={store}>
			<Routers />
		</Provider>
	);
}

export default App;

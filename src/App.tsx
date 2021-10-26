import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './App.css';
import Home from './screens/Home';
import LoginForm from './screens/LoginForm';
import SignupForm from './screens/SignupForm';
import NavBar from './components/NavBar';

const store = configureStore();
interface UserInfo {
	accessToken?: string;
	username?: string;
	id?: string;
}
function App (){
	const history = useHistory();
	useEffect(() => {
		const logedUser: UserInfo = configureStore().getState().user.data;

		if (logedUser.accessToken) history.push('/');
		else history.push('/login');
	}, []);

	return (
		<Provider store={store}>
			<div className='App'>
				<NavBar />
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/login' exact>
						<LoginForm />
					</Route>
					<Route path='/signup' exact>
						<SignupForm />
					</Route>
				</Switch>
			</div>
		</Provider>
	);
}

export default App;

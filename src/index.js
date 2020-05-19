import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'


const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reduxFirestore(firebase, fbConfig)
	)
);


const rrfConfig = {
	userProfile: 'users', // collection where profiles are stored in database
	// !WARNING useFirestoreForProfile option does not recognize users added manually from the Firebase console page
	useFirestoreForProfile: true,
}

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
	presence: 'presence',
	sessions: 'sessions'
};



function AuthIsLoaded({ children }) {
	const auth = useSelector(state => state.firebase.auth)
	if (!isLoaded(auth)) return <div className="center"><p>Loading Mario Plan...</p></div>;
	return children;
}




ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AuthIsLoaded>
					<App />
				</AuthIsLoaded>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyBhiKNAQDD73jjf_2J1dkUnIWlgWywcta8",
	authDomain: "sahil-mario-plan.firebaseapp.com",
	databaseURL: "https://sahil-mario-plan.firebaseio.com",
	projectId: "sahil-mario-plan",
	storageBucket: "sahil-mario-plan.appspot.com",
	messagingSenderId: "351547507401",
	appId: "1:351547507401:web:395e98b8636a281b468318",
	measurementId: "G-5WBXZPGSZD"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;
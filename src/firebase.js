import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC_JRsdxs46B2CMTdfbr-Wg39JTrxD5voA",
	authDomain: "clone-579c6.firebaseapp.com",
	databaseURL: "https://clone-579c6.firebaseio.com",
	projectId: "clone-579c6",
	storageBucket: "clone-579c6.appspot.com",
	messagingSenderId: "977910418368",
	appId: "1:977910418368:web:845af4243d31d994a31625",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

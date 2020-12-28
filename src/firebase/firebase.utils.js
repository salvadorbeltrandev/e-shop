import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyC3cpLXoOALALr9u2-uHaoKghDaT4iJkgw",
	authDomain: "crwn-db-8cf32.firebaseapp.com",
	projectId: "crwn-db-8cf32",
	storageBucket: "crwn-db-8cf32.appspot.com",
	messagingSenderId: "893366871644",
	appId: "1:893366871644:web:0444a9b85e9310f1bae899",
	measurementId: "G-CCGRJWNFQV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Always trigger the google pop up, whenever we use auth.GoogleAuthProvider.
provider.setCustomParameters( { prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
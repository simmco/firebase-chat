import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAeSbYJ3iZy8Qg5mHgvJ_SfZ97bb9KyJ2A",
    authDomain: "chat-redux.firebaseapp.com",
    databaseURL: "https://chat-redux.firebaseio.com",
    projectId: "chat-redux",
    storageBucket: "chat-redux.appspot.com",
    messagingSenderId: "192686661357"
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

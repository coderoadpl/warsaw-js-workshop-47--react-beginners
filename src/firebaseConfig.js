import firebase from 'firebase'
 
const firebaseConfig = {
  apiKey: "AIzaSyA6wiD88v0jWhFfKndBu3W0X_tJCsiYf5U",
  authDomain: "warsaw-js-w-47--react-chat.firebaseapp.com",
  databaseURL: "https://warsaw-js-w-47--react-chat.firebaseio.com",
  projectId: "warsaw-js-w-47--react-chat",
  storageBucket: "warsaw-js-w-47--react-chat.appspot.com",
  messagingSenderId: "949242645221",
  appId: "1:949242645221:web:61bd0f18fb8992eb19a20c"
}

firebase.initializeApp(firebaseConfig)

export default firebase.database()
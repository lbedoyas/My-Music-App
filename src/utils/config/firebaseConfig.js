import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCUDpWxzHeg22kIH3lcuiC2DSbOqsjnyU0",
    authDomain: "loginfirebase-e933c.firebaseapp.com",
    databaseURL: "https://loginfirebase-e933c.firebaseio.com",
    projectId: "loginfirebase-e933c",
    storageBucket: "loginfirebase-e933c.appspot.com",
    messagingSenderId: "9015987253",
    appId: "1:9015987253:web:f272f74c60fc16754e357c"
    };

  // Initialize Firebase
    const fire = firebase.initializeApp(firebaseConfig);
    const auth = fire.auth();
    export {auth}
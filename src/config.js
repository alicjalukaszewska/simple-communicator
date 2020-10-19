import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBA_jPC85FPlo9D2nShZ9uyWv5-7cHoO78",
  authDomain: "komunikator-a3f52.firebaseapp.com",
  databaseURL: "https://komunikator-a3f52.firebaseio.com",
  projectId: "komunikator-a3f52",
  storageBucket: "komunikator-a3f52.appspot.com",
  messagingSenderId: "997534555292",
  appId: "1:997534555292:web:d29546429367e1a251e159"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;

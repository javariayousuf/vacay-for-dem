import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "./firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA7wrk8FzXYmdKKHGhS91pjeqTL9LVteOE",
  authDomain: "vfd-beta.firebaseapp.com",
  databaseURL: "https://vfd-beta.firebaseio.com",
  projectId: "vfd-beta",
  storageBucket: "vfd-beta.appspot.com",
  messagingSenderId: "759320862238",
  appId: "1:759320862238:web:9e26f80d016ac93aac580f",
  measurementId: "G-XFW2VV5DZJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');

var firebaseConfig = {
    apiKey: "<FIREBASE-APIKEY",
    authDomain: "<AUTH-DOMAIN>",
    databaseURL: "<DB-URL>",
    projectId: "<PROJECT-ID>",
    storageBucket: "<BUCKET>",
    messagingSenderId: "<SENDER-ID",
    appId: "APP-ID"
  };
  firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    
    


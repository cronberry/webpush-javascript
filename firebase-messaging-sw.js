
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBYtmUdRrxSZUCbkpzM1fsrxlhGVeWnRCw",
    authDomain: "bitshorts-880fc.firebaseapp.com",
    databaseURL: "https://bitshorts-880fc.firebaseio.com",
    projectId: "bitshorts-880fc",
    storageBucket: "bitshorts-880fc.appspot.com",
    messagingSenderId: "16319431289",
    appId: "1:16319431289:web:d7d1793a6159d2a7"
  };
  firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    
    


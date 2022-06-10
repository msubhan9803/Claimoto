// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyC9phkk20eEoTj7ncrP2bkXTxAGs-ozlzQ",
    authDomain: "claimoto-74b0d.firebaseapp.com",
    projectId: "claimoto-74b0d",
    storageBucket: "claimoto-74b0d.appspot.com",
    messagingSenderId: "295095794480",
    appId: "1:295095794480:web:2ed443008555f73568a6f5",
    measurementId: "G-MGSWPV5WQX",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
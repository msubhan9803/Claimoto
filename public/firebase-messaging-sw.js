// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCXXn9MO2bpGZhebmO5C9c5ysVS47lTosQ",
    authDomain: "claimoto-web-app.firebaseapp.com",
    projectId: "claimoto-web-app",
    storageBucket: "claimoto-web-app.appspot.com",
    messagingSenderId: "304292134229",
    appId: "1:304292134229:web:ce29a8130e186c350203dc",
    measurementId: "G-4S49MWR1GF"
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
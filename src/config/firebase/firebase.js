// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import DeviceUUID from "config/Device/DeviceUUID";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXXn9MO2bpGZhebmO5C9c5ysVS47lTosQ",
    authDomain: "claimoto-web-app.firebaseapp.com",
    projectId: "claimoto-web-app",
    storageBucket: "claimoto-web-app.appspot.com",
    messagingSenderId: "304292134229",
    appId: "1:304292134229:web:ce29a8130e186c350203dc",
    measurementId: "G-4S49MWR1GF",
    vapidKey: "BBS9HLA-9_FB3TZEA6swtFIt6KT6ftidhtVhaVXVWstYiLJuaR6pyavFlZDExPHOP74daEc75jRePW96m_vPAtU"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);


export const getFCMToken = async (setTokenFound) => {
    return getToken(messaging, { vapidKey: firebaseConfig.vapidKey }).then((currentToken) => {
        if (currentToken) {
            let uuid = new DeviceUUID().get();

            console.log('current token for client: ', currentToken);
            console.log('current Device UUID: ', uuid);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}
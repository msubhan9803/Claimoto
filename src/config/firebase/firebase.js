// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";
import DeviceUUID from "config/Device/DeviceUUID";
import { ENVIRONMENT } from "variables";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9phkk20eEoTj7ncrP2bkXTxAGs-ozlzQ",
    authDomain: "claimoto-74b0d.firebaseapp.com",
    projectId: "claimoto-74b0d",
    storageBucket: "claimoto-74b0d.appspot.com",
    messagingSenderId: "295095794480",
    appId: "1:295095794480:web:2ed443008555f73568a6f5",
    measurementId: "G-MGSWPV5WQX",  
    vapidKey: "BEjDroizWHXcP0wbmmHGakGtuzgUGz-B43KC4kiHCVs8ejcytAekS8tHGhcIzDTrY1BJHCVwFds--v8MIyqEZ9A"
};

let messaging;
if (ENVIRONMENT !== "DEVELOPMENT") {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    messaging = getMessaging(app);

}
export const getFCMToken = async (setTokenFound) => {
    if (ENVIRONMENT !== "DEVELOPMENT") {
        return getToken(messaging, { vapidKey: firebaseConfig.vapidKey }).then((currentToken) => {
            if (currentToken) {
                let uuid = new DeviceUUID().get();
                let device = window.navigator.platform;
                setTokenFound(currentToken);
                return {
                    fcm_token: currentToken,
                    device_id: uuid,
                    device: device
                }
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log('No registration token available. Request permission to generate one.');
                setTokenFound(null);
                // shows on the UI that permission is required 
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // catch error while creating client token
        });
    }
}
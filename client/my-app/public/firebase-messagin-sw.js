importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDxNzbOGTjWgW1pRSPWCBbnWNHFCKBO1_c",
    authDomain: "tailwind-5dff9.firebaseapp.com",
    databaseURL: "https://tailwind-5dff9.firebaseio.com",
    projectId: "tailwind-5dff9",
    storageBucket: "tailwind-5dff9.appspot.com",
    messagingSenderId: "183490903445",
    appId: "1:183490903445:web:038b47e41b3699bfae4a9c",
    measurementId: "G-GV5LDSSC78"
});
const messaging = firebase.messaging();
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCF3AjnP7KfDxxgZ2ykdCj0GmlmnM8MNo8",
  authDomain: "pushnotiffications-e9afa.firebaseapp.com",
  projectId: "pushnotiffications-e9afa",
  storageBucket: "pushnotiffications-e9afa.firebasestorage.app",
  messagingSenderId: "486589992900",
  appId: "1:486589992900:web:3d939eaf8630d6c2ffde91",
  measurementId: "G-YTF5L6F41H",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD9hWajv3R5neUwNK_ZQXf12ANHcigm8dE",
    authDomain: "webserver-5bd9e.firebaseapp.com",
    projectId: "webserver-5bd9e",
    storageBucket: "webserver-5bd9e.appspot.com",
    messagingSenderId: "620366489460",
    databaseURL: "https://webserver-5bd9e-default-rtdb.firebaseio.com",
    appId: "1:620366489460:web:3faac1a80ce9fbbdddee21",
    measurementId: "G-3VLS307JGQ"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



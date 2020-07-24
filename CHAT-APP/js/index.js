
const init = () => {
   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAB-cwn3AcdpU4-O-UmWCHHzfDPU18gGtw",
    authDomain: "chat-app-15103.firebaseapp.com",
    databaseURL: "https://chat-app-15103.firebaseio.com",
    projectId: "chat-app-15103",
    storageBucket: "chat-app-15103.appspot.com",
    messagingSenderId: "235580104504",
    appId: "1:235580104504:web:92bae3fa008b06eead2bcd",
    measurementId: "G-XSB4G775B0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
console.log(firebase)
   view.setActiveScreen(`registerScreen`)
    
}
window.onload = init
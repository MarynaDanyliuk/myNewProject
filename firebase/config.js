import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// import "firebase/storage";
// import "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7-P7qVDbBg4htvMItNXu0l4FsIhWWhI4",
  authDomain: "myapp-fdbaf.firebaseapp.com",
  projectId: "myapp-fdbaf",
  storageBucket: "myapp-fdbaf.appspot.com",
  messagingSenderId: "984542559631",
  appId: "1:984542559631:web:9c046def7ad2c17a8b1ffa",
  measurementId: "G-YWLN1MYM12",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase.initializeApp(firebaseConfig);

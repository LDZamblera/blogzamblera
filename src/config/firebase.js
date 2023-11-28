import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  
    
    messagingSenderId: "798566621192",
    appId: "1:798566621192:web:a13b9479a5f0bdf87671bd"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;

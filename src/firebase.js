import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOqUJuhmGiccQwva2-myCnO44OFnLQRB4",
  authDomain: "glug-sheets.firebaseapp.com",
  projectId: "glug-sheets",
  storageBucket: "glug-sheets.appspot.com",
  messagingSenderId: "538499889125",
  appId: "1:538499889125:web:f4813003c71ca231f3a10c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((data) => {
      const email = data.user.email;
      const profilePic = data.user.photoURL;
      const token = data.user.uid;

      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((err) => {
      console.log(err);
    });
};

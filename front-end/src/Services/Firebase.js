// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMFPTyy-e__kfWcm_hV1GC7xev9bi3ZCo",
  authDomain: "catclub-8ec8d.firebaseapp.com",
  projectId: "catclub-8ec8d",
  storageBucket: "catclub-8ec8d.appspot.com",
  messagingSenderId: "1061390948923",
  appId: "1:1061390948923:web:61508ba2c13b4a3c601a1e",
  measurementId: "G-XRPHEFY31P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(auth, googleProvider).then((res) => {
        const user = res.user
        console.log(user)
    });
     } catch (err) {
      console.log(err);
    }
  };

  export const logOut = async () =>{
    try {
      await signOut(auth)
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    }
  }
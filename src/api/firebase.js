import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDihLp58FOkhEBwvgG-xg4i13OAv2bey9Y",
  authDomain: "pals-5ae48.firebaseapp.com",
  projectId: "pals-5ae48",
  storageBucket: "pals-5ae48.appspot.com",
  messagingSenderId: "505437498863",
  appId: "1:505437498863:web:0a1a2daf144abfa8e71a1a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const FIREBASE_IMAGE_REF = "contact-images";
export default firebase;

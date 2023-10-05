import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcl_RrR_UKyGyTG5KeTBb1YO51uC1uKXM",
  authDomain: "react-career-hub-74590.firebaseapp.com",
  projectId: "react-career-hub-74590",
  storageBucket: "react-career-hub-74590.appspot.com",
  messagingSenderId: "3174776378",
  appId: "1:3174776378:web:eb4478908bfd6ddb52bf03",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

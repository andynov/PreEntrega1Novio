import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKEL-SK02P6r5Gj7fn0DV__xFqTwwmL44",
  authDomain: "allegro-85850.firebaseapp.com",
  projectId: "allegro-85850",
  storageBucket: "allegro-85850.appspot.com",
  messagingSenderId: "193691596999",
  appId: "1:193691596999:web:00f5c4d335818d248026e2"
}

const app = initializeApp(firebaseConfig)

export const initFirebase = ()  => app
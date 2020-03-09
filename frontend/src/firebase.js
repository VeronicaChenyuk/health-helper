
import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBM5xWhaXxADqDHumWRzWFzWeSXTF9FPDk",
  authDomain: "medical-todo.firebaseapp.com",
  databaseURL: "https://medical-todo.firebaseio.com",
  projectId: "medical-todo",
  storageBucket: "medical-todo.appspot.com",
  messagingSenderId: "303285670500",
  appId: "1:303285670500:web:b7e65c5eb6161489e88571"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}

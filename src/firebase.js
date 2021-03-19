import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCsnDM7VdX6CSAguv1KtczlMOy7yzuwww0",
  authDomain: "popells.firebaseapp.com",
  databaseURL: "https://popells-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "popells",
  storageBucket: "popells.appspot.com",
  messagingSenderId: "463690510400",
  appId: "1:463690510400:web:45e672034732066f88afa5",
};

firebase.initializeApp(config);

export default firebase.database();

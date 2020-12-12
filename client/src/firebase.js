import * as firebase from "firebase";
import "firebase/database";

let config = {

};

firebase.initializeApp(config);

export default firebase.database();

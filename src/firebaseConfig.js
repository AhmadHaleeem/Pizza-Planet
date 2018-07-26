import Firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAua-lE0wvmnMjhuh0J9OOce8frjOHCNCs",
    authDomain: "pizza-planet-24cd4.firebaseapp.com",
    databaseURL: "https://pizza-planet-24cd4.firebaseio.com",
    projectId: "pizza-planet-24cd4",
    storageBucket: "",
    messagingSenderId: "1073269080073"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
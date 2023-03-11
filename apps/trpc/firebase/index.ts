import admin, { ServiceAccount } from "firebase-admin"
import parralax from "./parralax.json"

let firebaseApp;

if(admin.apps.length == 0){
    firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(parralax as ServiceAccount)
    })
}

export default firebaseApp || null
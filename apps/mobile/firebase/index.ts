import { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { Auth, getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native"

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

let app: FirebaseApp
let auth: Auth 

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig, "parralax")
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence({
      getItem(...args){
        return AsyncStorage.getItem(...args)
      },
      setItem(...args){
        return AsyncStorage.setItem(...args)
      },
      removeItem(...args){
        return AsyncStorage.removeItem(...args)
      }
    })
  })
}else {
  app = getApps()[0]
  auth = getAuth(app)
}




export default app
export { 
  auth
}

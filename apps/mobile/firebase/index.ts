import { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket } from "@env";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);

export default app

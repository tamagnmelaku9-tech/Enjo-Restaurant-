import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// Firebase configuration from firebase-applet-config.json
const firebaseConfig = {
  apiKey: "AIzaSyBe2NpK7t7uAWSu4VeN9JRRqcUZlWmyiVo",
  authDomain: "plated-channel-njlsj.firebaseapp.com",
  projectId: "plated-channel-njlsj",
  storageBucket: "plated-channel-njlsj.firebasestorage.app",
  messagingSenderId: "1073746814353",
  appId: "1:1073746814353:web:1baa383ab44ef80e48e630"
};

const app = initializeApp(firebaseConfig);

// Use the specific firestoreDatabaseId "ai-studio-enjo-bfde30f0-a715-4515-8365-bfe7d4322dbc"
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, "ai-studio-enjo-bfde30f0-a715-4515-8365-bfe7d4322dbc");


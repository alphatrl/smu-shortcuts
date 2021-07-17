import 'firebase/analytics';

import firebase from 'firebase/app';

const isProduction = process.env.NODE_ENV === 'production';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export default !isProduction
  ? undefined
  : !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAdXfr8IXPActKdxmCPVPyrIWszulo-aJE',
  authDomain: 'uploading-photos-to-firestore.firebaseapp.com',
  projectId: 'uploading-photos-to-firestore',
  storageBucket: 'uploading-photos-to-firestore.appspot.com',
  messagingSenderId: '87071359814',
  appId: '1:87071359814:web:27737abaca444afc14db47',
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export const storage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

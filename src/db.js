

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDduNvimJGBKBPyB3biWR597yO1gygeYi0",
    authDomain: "chat-f02aa.firebaseapp.com",
    projectId: "chat-f02aa",
    storageBucket: "chat-f02aa.appspot.com",
    messagingSenderId: "70568979384",
    appId: "1:70568979384:web:768bbe670efbcc2bbbfd4d",
    measurementId: "G-5WH6SVM5VB"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;

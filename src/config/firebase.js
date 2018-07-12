import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

const articlesRef = databaseRef.child('articles');

export { articlesRef };

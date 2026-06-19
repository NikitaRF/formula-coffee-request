import { initializeApp } from 'firebase/app';
import {
    initializeAuth,
    getAuth,
    getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBznRGPElFktG3IOxA54dax7dVrjqdh_ao',
    authDomain: 'formula-coffee-d6f54.firebaseapp.com',
    projectId: 'formula-coffee-d6f54',
    storageBucket: 'formula-coffee-d6f54.appspot.com',
    messagingSenderId: '837804958669',
    appId: '1:837804958669:web:67046f83d414b86578da84',
};

export const app = initializeApp(firebaseConfig);

// initializeAuth с RN-персистентностью через AsyncStorage, чтобы сессия
// сохранялась между перезапусками. При повторной инициализации (Fast Refresh)
// падает — тогда берём уже созданный экземпляр через getAuth.
let auth;
try {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
} catch (e) {
    auth = getAuth(app);
}

export { auth };
export const db = getFirestore(app);
export const storage = getStorage(app);

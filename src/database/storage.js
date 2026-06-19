import { ref } from 'firebase/storage';
import { storage } from './firebase';

export { storage };
export const storageRef = ref(storage);

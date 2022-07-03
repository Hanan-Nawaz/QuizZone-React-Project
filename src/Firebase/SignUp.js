import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase-Services'

const UserRef = collection(db, "Users");

class Users {
    addUsers(newUser){
        return addDoc(UserRef, newUser);
    }
}

export default new Users();
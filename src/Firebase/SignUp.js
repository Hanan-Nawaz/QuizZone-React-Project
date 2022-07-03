import { setDoc, doc } from 'firebase/firestore';
import { db } from './Firebase-Services'

class Users {
    addUsers(newUser, Email){
        return setDoc(doc(db, "Users", Email), newUser );
    }
}

export default new Users();
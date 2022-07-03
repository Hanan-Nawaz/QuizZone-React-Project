import {  getDoc, doc } from 'firebase/firestore';
import { db } from './Firebase-Services'

class getUsers {
    getuser(Id){
        return getDoc(doc(db, "Users", Id));
    }
}

export default new getUsers();
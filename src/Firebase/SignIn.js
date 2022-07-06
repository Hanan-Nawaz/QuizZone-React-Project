import { collection, getDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './Firebase-Services'

const collectionref = collection(db, "Users");

class getUsers {
    getuser(Id){
        return getDoc(doc(db, "Users", Id));
    }
    getusers(){
        return getDocs(collectionref);
    }
}

export default new getUsers();
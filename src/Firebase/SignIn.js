import { collection, getDoc, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase-Services'

const collectionref = collection(db, "Users");

class getUsers {
    getuser(Id){
        return getDoc(doc(db, "Users", Id));
    }
    getusers(){
        return getDocs(collectionref);
    }
    delusers(id){
        return deleteDoc(doc(db, "Users", id));
    }
}

export default new getUsers();
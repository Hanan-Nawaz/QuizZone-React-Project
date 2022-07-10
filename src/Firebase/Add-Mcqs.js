import { db } from './Firebase-Services'
import { collection, doc, setDoc, getDocs, getDoc } from  'firebase/firestore'

class Mcqs  {
    addmcq (mcqtag, Topic, newMcq) {
        return setDoc(doc(db, `${Topic}` , mcqtag) , newMcq);
    }
    getmcqs (Topic) {
        const collectionref = collection(db, `${Topic}`);
        return getDocs(collectionref);
    }
    getmcq (Topic, Id) {
        return getDoc(doc(db, `${Topic}`, Id));
    }
}

export default new Mcqs();
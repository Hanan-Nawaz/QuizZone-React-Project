import { db } from './Firebase-Services'
import { collection, doc, setDoc, getDocs } from  'firebase/firestore'

class Mcqs  {
    addmcq (mcqtag, Topic, newMcq) {
        return setDoc(doc(db, `${Topic}` , mcqtag) , newMcq);
    }
    getmcqs (Topic) {
        const collectionref = collection(db, `${Topic}`);
        return getDocs(collectionref);
    }
}

export default new Mcqs();
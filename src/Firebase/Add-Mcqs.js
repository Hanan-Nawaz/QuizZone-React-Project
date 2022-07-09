import { db } from './Firebase-Services'
import { doc, setDoc } from  'firebase/firestore'

class Mcqs  {
    addmcq (mcqtag, Topic, newMcq) {
        return setDoc(doc(db, `${Topic}` , mcqtag) , newMcq);
    }
}

export default new Mcqs();
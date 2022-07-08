import { db } from './Firebase-Services'
import { doc, setDoc } from  'firebase/firestore'

class Mcqs  {
    addmcq (mcqtag, TopicName, newMcq) {
        return setDoc(doc(db, TopicName , mcqtag) , newMcq);
    }
}

export default new Mcqs();
import { db } from './Firebase-Services'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

const dbref = collection(db, "Topics");

class Topics {
    addtopic = (Name,newTopic) => {
        return setDoc(doc(db, "Topics",Name), newTopic);
    }

    getTopics = () => {
        return getDocs(dbref);
    }
};

export default new Topics();
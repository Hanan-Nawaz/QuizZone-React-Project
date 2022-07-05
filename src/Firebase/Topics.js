import { db } from './Firebase-Services'
import { doc, getDocs, setDoc } from 'firebase/firestore'


class Topics {
    addtopic(Name,newTopic){
        return setDoc(doc(db, "Topics",Name), newTopic);
    }

    getTopics(){
        return getDocs();
    }
};

export default new Topics();
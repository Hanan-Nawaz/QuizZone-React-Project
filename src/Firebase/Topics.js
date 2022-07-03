import { db } from './Firebase-Services'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const collectionref =  collection(db, "Topics");

class Topics {
    addtopic(newTopic){
        return addDoc(collectionref, newTopic);
    }

    getTopics(){
        return getDocs();
    }
};

export default new Topics();
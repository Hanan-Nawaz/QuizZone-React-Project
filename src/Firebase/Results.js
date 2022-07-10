import { collection, doc, getDocs, setDoc, getDoc } from "firebase/firestore"
import { db } from "./Firebase-Services"

class Results {
    addResult(Email, Topic, newResult ){
        return setDoc(doc(db, `${Email}`, `${Topic}`) , newResult);
    }
    getResults(Email){
        const collref = collection(db, `${Email}`);
        return getDocs(collref);
    }
    getResult(Email, Topic){
        return getDoc(doc(db, `${Email}`, `${Topic}`));
    }
}

export default new Results();
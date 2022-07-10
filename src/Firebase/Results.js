import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { db } from "./Firebase-Services"

class Results {
    addResult(Email, Topic, newResult ){
        return setDoc(doc(db, `${Email}`, `${Topic}`) , newResult);
    }
    getResults(Email){
        const collref = collection(db, `${Email}`);
        return getDocs(collref);
    }
}

export default new Results();
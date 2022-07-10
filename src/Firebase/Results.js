import { doc, setDoc } from "firebase/firestore"
import { db } from "./Firebase-Services"

class Results {
    addResult(Email, Topic, newResult ){
        return setDoc(doc(db, `${Email}`, `${Topic}`) , newResult);
    }
}

export default new Results();
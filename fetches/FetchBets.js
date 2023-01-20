import {db} from "../firebase";
import {collection, getDocs} from "firebase/firestore";

async function FetchBets() {
    try {
        let bets = [];
        const colSnap = await getDocs(collection(db, "bets"));
        colSnap.forEach((doc) => {
            const bet = {
            "text": doc.data().description, 
            "amount": doc.data().amount,
            "creator": doc.data().creator
            };
            bets.push(bet);
            //console.log(doc.id, " => ", doc.data());
        });
        console.log("Before: ", bets);
        return bets;
    } catch (e) {
        console.log(e)
    }
}

let bets = []
const getBets = 
    FetchBets()
    .then((bet) => bets.push(bet))
    .catch((e) => console.error(e));

export {bets};
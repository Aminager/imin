import {db} from "../firebase";
import {collection, getDocs, query, QuerySnapshot} from "firebase/firestore";
import { useState, useEffect } from "react";

/* Tack Johan Åkerman för inspiration */

export const getBets = () => {
    const [bets, setBets] = useState([]);

    useEffect(() => {
        const items = [];
        const q = query(collection(db, "bets"));
        getDocs(q).then((querySnaphot) => {
            querySnaphot.forEach((doc) => {
                const bet = {
                    "text": doc.data().description,
                    "amount": doc.data().amount,
                    "creator": doc.data().creator
                };
                items.push(bet);
            });
            setBets(items);
        });
    }, []);

    return bets;

    /*try {
        const bets = [];
        const colSnap = await getDocs();
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
        return [];
    }*/
}
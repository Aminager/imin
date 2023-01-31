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
}
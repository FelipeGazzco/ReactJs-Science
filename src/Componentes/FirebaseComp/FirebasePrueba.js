import {collection, doc, getDocs} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../utils/Firebase";

export const FirebasePrueba = () => {

    useEffect(()=>{
        const getData = async() => {
            //carga inicial
            const query = collection(db, "items");
            const response = await getDocs(query);
            console.log("respuesta", response);

            /*carga id
            const newDocument={
                id: doc.id,
                data: doc.data()
            }*/

            //carga datos 
            const dataItems = response.docs.map(doc => {return{id: doc.id, ...doc.data()}});
            console.log("data Items", dataItems);
            //setProductos(dataItems);
        }
        getData();
    },[]);
    return(
        <p>Firebase Prueba</p>
    )
}
import { useEffect } from "react"
import { CurrentOrderCollection } from "../Database/CurrentOrderCollection"

export default function CurrentOrder(){
    
    useEffect(()=>{
        console.log(CurrentOrderCollection);
    },[])

    if(CurrentOrderCollection.length===0) return <h3 className="w-50 m-auto border p-3 mt-4 text-center">
        You don't have any current order.</h3>

    return(<>
    
        <div className="w-50 m-auto border p-3 mt-4 text-center">
            <h6>My Current Order</h6>
            <p>Name:- {CurrentOrderCollection[0].name}</p>
            <p>Price:- {CurrentOrderCollection[0].price}</p>
            <p>Quantity:- {CurrentOrderCollection[0].quantity}</p>
            <p>Ordered Date:- {CurrentOrderCollection[0].date}</p>
        </div>
    
    </>)
}
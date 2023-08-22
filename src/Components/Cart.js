import {useSelector, useDispatch} from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart } from "../utils/cartSlice"
const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)
 
    const dispatch = useDispatch()
   const  handleClearCart = () => {
        dispatch(clearCart())
    }
   return (<>
   <h2 className="font-bold text-3xl">Cart Items -{cartItems.length}</h2>
   <button className="p-2 font-bold m-2 bg-red-600" onClick={()=> handleClearCart()}>Clear Cart</button>
   <div className="flex m-2"> {cartItems.map((item)=> <FoodItem key={item.id} {...item}/>)}</div>
  
   
   </>) 
}

export default Cart
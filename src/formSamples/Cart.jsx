import {useState} from 'react'

export const Cart = () => {
    const [cartCount,setcartCount] = useState(0)
    const handleclick=()=>setcartCount(cartCount+1)
  return (
    <>
        <h1>Number of items in the cart: {cartCount}</h1>
        <button onClick={handleclick}>Add to Cart</button>


    </>
  )
}

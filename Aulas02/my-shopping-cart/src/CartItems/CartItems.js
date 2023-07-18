import React from 'react'
import Item from '../Item/Item'

const CartItems = () => {
  return (
    <div>
        <ul>
            <Item />
            <Item />
            <Item />
            <Item />
        </ul>
        <p>© 2020 - My Shopping Cart</p>
    </div>
  )
}

export default CartItems
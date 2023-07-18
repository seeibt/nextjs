import React from 'react';
import NavBar from '../NavBar/NavBar';
import Cursos from '../Cursos/Cursos';
import CartItems from '../CartItems/CartItems';
import Style from '../globals.css'

const ShoppingCart = () => {
  return (
    <>
      <NavBar/>
      <main>
         <Cursos />
      </main>
      <footer>
         <CartItems />
      </footer>
    </>
  );
}

export default ShoppingCart;
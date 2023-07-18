import React from 'react'

const NavBar = () => {
  return (
    <header>
    <nav>
        <h2 className='logo'>CUR<span>SOS</span></h2>
        <div className='nav-bar-actions'>
            <div className='nav-bar-total'>
                <span className='nav-bar-total-quantity'>2 cursos</span>
                <span className='nav-bar-total-price'>R$ 239,80</span>
            </div>
            <button className='clean-btn'>Finalizar compra</button>
        </div>
    </nav>
    </header>
  )
}

export default NavBar
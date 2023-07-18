import React, { useState } from 'react'

const ListItem = ({id, title, done, excluirToDo}) => {
const [feito, setDone] = useState(done);

  function mudarFeitoTask() {
    if(!feito){
      setDone(true);
    }else{
      setDone(false);
    }
  }

  return (
    <li id={id}>
        <p>{title}</p>
        <p>{feito ? 'Feito' : 'A fazer'}</p>
        <button onClick={mudarFeitoTask}>Marcar como {feito ? 'a fazer' : 'feito'}</button>
        <button onClick={excluirToDo}>Excluir</button>
    </li>
  )
}

export default ListItem
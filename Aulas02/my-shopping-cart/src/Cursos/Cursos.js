import CardCurso from '../CardCurso/CardCurso'
import React from 'react'

const Cursos = () => {
  return (
    <main>
      <section className='section-curso'>
          <CardCurso />
          <CardCurso />
          <CardCurso />
      </section>
    </main>
  )
}

export default Cursos
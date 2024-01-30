import Link from 'next/link'
import React from 'react'

export default function PersonCard({ person }) {
  return (
    <div className='card m-3' style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className='card-title'>{person.name} {person.lastname}</h5>
        <p className='card-text'>{person.age} años</p>
        <Link href={`/people/${person.id}`} className='btn btn-outline-primary' >Editar</Link>
      </div>
    </div>
  )
}

'use client'

import PersonCard from '@/components/PersonCard'
import { useEffect, useState } from 'react'


export default function PeoplePage() {

	const [people, setPeople] = useState([])

	useEffect(() => {
		fetch('/api/people')
		.then(res => res.json())
		.then(data => setPeople(data))
	}, [])

	return (
		<section className='d-flex justify-content-start flex-wrap'>
			{people.map(person => <PersonCard key={person.id} person={person} />)}
		</section>
	)
}

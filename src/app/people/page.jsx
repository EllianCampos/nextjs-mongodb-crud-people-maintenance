import { connectDB } from "@/libs/mongodb";
import User from '@/models/user'
import PersonCard from '@/components/PersonCard'

export const dynamic = 'force-dynamic'

async function getPeople() {
	await connectDB()
	return User.find()
}

export default async function PeoplePage() {
	const people = await getPeople()	

	return (
		<section className='d-flex justify-content-start flex-wrap'>
			{people.map(person => <PersonCard key={person.id} person={person} />)}
		</section>
	)
}
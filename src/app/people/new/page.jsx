'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function NewPersonPage({ params }) { 
	const router = useRouter()

	const [name, setName] = useState("")
	const [lastname, setLastname] = useState("")
	const [age, setAge] = useState("")

	useEffect(() => {
		const getPerson = async () => {
			fetch(`/api/people/${params.id}`)
			.then(res => res.json())
			.then(person => {
				setName(person.name)
				setLastname(person.lastname)
				setAge(person.age)
			})			
		}

		if (params.id) {
			getPerson(`/api/people/${params.id}`)
		}
	}, [])


	const handleSubmit = (event) => {
		event.preventDefault()

		if (params.id) {
			fetch(`/api/people/${params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, lastname, age: Number(age) })
			})
			.then(res => {
				router.push('/people')
				router.refresh()
			})
		} else {
			fetch('/api/people', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, lastname, age: Number(age) })
			})
			.then(res => {
				router.push('/people')
				router.refresh()
			})
		}
	}

	const handleDelete = () => {
		fetch(`/api/people/${params.id}`, { method: 'DELETE' })
		.then(res => {
			router.push('/people')
			router.refresh()
		})		
	}

	return (
		<div className='container'>
			<h1 className='m-3'>{params.id == null ? 'Registrar persona' : 'Actualizar datos'}</h1>
			<form method='POST' onSubmit={handleSubmit}>
				<div className="form-group mt-2">
					<label htmlFor="name">Nombre</label>
					<input
						type="text"
						name="name"
						id="name"
						className="form-control"
						placeholder='Nombre'
						required
						value={name}
						onChange={event => setName(event.target.value)}
					/>
				</div>
				<div className="form-group mt-2">
					<label htmlFor="lastname">Apellidos</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						className="form-control"
						placeholder='Apellidos'
						value={lastname}
						onChange={event => setLastname(event.target.value)}
					/>
				</div>
				<div className="form-group mt-2">
					<label htmlFor="age">Edad</label>
					<input
						type="text"
						name="age"
						id="age"
						className="form-control"
						placeholder='Edad'
						value={age}
						onChange={event => setAge(event.target.value)}
					/>
				</div>
				<div className="form-group mt-3 d-flex justify-content-between  ">
					<input type="submit" value={params.id == null ? 'Registrar' : 'Guardar Cambios'} className='btn btn-outline-primary ' />
					{params.id != null && (
						<>
							<Link href="/people" className='btn btn-outline-warning' >Descartar</Link>
							<Link href="/people" className='btn btn-outline-danger' onClick={handleDelete} >Eliminar</Link>
						</>
					)}
				</div>
			</form>
		</div>
	)
}

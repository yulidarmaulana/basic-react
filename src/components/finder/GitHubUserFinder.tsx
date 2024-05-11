// src/components/GitHubUserFinder.tsx

import React, { useState } from 'react'
import axios from 'axios'
import { UserData } from '../../store/finder'
import Card from './card'
import SearchForm from './SearchForm'

const GitHubUserFinder: React.FC = () => {
	const [username, setUsername] = useState('')
	const [userData, setUserData] = useState<UserData | null>(null)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}`
			)
			setUserData(response.data)
		} catch (error) {
			console.error('Error fetching user data:', error)
			setUserData(null)
		}
	}

	return (
		<div>
			<SearchForm
				username={username}
				setUsername={setUsername}
				handleSubmit={handleSubmit}
			/>

			{userData && (
				<div className='m-auto max-w-2xl px-5'>
					<Card {...userData} />
				</div>
			)}
		</div>
	)
}

export default GitHubUserFinder

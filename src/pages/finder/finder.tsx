import { FC } from 'react'
import GitHubUserFinder from '../../components/finder/GitHubUserFinder'
const Finder: FC = () => {
	return (
		<>
			<section className='relative h-screen'>
				<div className='mx-auto h-full bg-white py-16 dark:bg-slate-800'>
					<p className='text-center text-2xl font-bold text-astral-700 dark:text-astral-100'>
						Github Finder
					</p>
						<GitHubUserFinder />
				</div>
			</section>
		</>
	)
}

export default Finder
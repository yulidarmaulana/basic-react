import { FC } from 'react'
import Card from '../components/card'
import { data } from '../store/project'
import { Link } from 'react-router-dom'

const Project: FC = () => {
	return (
		<>
			<div className='mx-auto px-4 dark:bg-slate-800 sm:px-6 lg:px-8 h-screen'>
				<section className='relative bg-white dark:bg-slate-800'>
					<div className='z-50 mx-auto max-w-6xl pt-16'>
						<div className='mx-auto'>
							{/* <h2 className='mb-3 flex scroll-m-20 align-bottom text-4xl font-extrabold tracking-tight text-astral-800 dark:text-astral-100 lg:text-5xl'>
								Project
							</h2> */}
							<p className='mb-6 font-medium text-xl text-astral-700 dark:text-astral-100'>
							a page from a collection of projects that come together in a magical harmony that happens to be made with React
							</p>
						</div>
					</div>
				</section>

				<section className='relative dark:bg-slate-800'>
					<div className='mx-auto max-w-6xl'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
							{data.map(card => (
								<Link to={`${card.url}`} key={card.title}>
									<Card key={card.title} {...card} />
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Project

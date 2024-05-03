import { FC } from 'react'
import Card from '../components/card'
import { data } from '../store/project'
import { Link } from 'react-router-dom'

const Project: FC = () => {
	return (
		<>
			<section className='relative bg-white dark:bg-slate-800'>
				<div className='z-50 mx-auto py-16 '>
					<div className='mx-auto max-w-6xl'>
						<h2 className='mb-3 flex scroll-m-20 align-bottom text-4xl font-extrabold tracking-tight text-astral-800 dark:text-astral-100 lg:text-5xl'>
							Project
						</h2>
						<p className='text-md mb-2 font-medium leading-relaxed text-astral-800 dark:text-astral-100'>
							a page from a collection of projects that come together in magical
							harmony that just so happens to be created with the magic of React
						</p>
					</div>
				</div>
			</section>

			<section className='mt-8'>
				<div className='mx-auto max-w-6xl'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-8'>
						{data.map(card => (
              <Link to={`${card.url}`} key={card.title} target='_blank'>
							<Card key={card.title} {...card} />
              </Link>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Project

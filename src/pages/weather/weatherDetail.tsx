import { FC } from 'react'
import Weather from '../../components/weather/Weather'

const weatherDetail: FC = () => {
	return (
		<>
			<section className='relative h-screen'>
				<div className='mx-auto h-full bg-white py-16 dark:bg-slate-800'>
					<p className='text-center text-2xl font-bold text-astral-700 dark:text-astral-100 mb-4'>
						Weather
					</p>
          <Weather />
				</div>
			</section>
		</>
	)
}

export default weatherDetail
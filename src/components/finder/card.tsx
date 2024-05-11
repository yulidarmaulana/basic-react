import { UserData } from '../../store/finder'

const Card = ({
	name,
	avatar_url,
	bio,
  created_at,
	followers,
	following,
  login,
	public_repos
}: UserData) => {

	return (
		<div className='flex md:flex-row flex-col items-center gap-5 rounded-xl bg-slate-300 px-5 py-5 text-center text-xl font-medium text-slate-600 dark:bg-slate-600 dark:text-slate-300'>
			<img
        className='mb-auto'
				src={avatar_url}
				alt={name}
				style={{ width: '100px', borderRadius: '50%' }}
			/>
			<div className='w-full'>
				<div className='flex justify-between max-sm:flex-col flex-row'>
					<h2 className='text-start dark:text-slate-100'>{name} <span className='text-slate-400 text-base'>@{login}</span> </h2>
					<p className='text-start text-slate-400 text-base mt-auto'>{created_at.toString().substring(0, 10)}</p>
				</div>
          <p className={`bio ? undefined : 'unavailable' text-start text-slate-500 text-sm dark:text-slate-400`}>{bio} {bio ? bio : `This profile has no bio.`}</p>

				<div className='flex justify-between mt-3 gap-4 rounded-lg bg-astral-600 p-4 text-slate-100'>
					<p>
						Followers <br /> {followers}
					</p>
					<p>
						Following <br /> {following}
					</p>
					<p>
						Repos <br /> {public_repos}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card

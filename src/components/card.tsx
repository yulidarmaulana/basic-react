
// Definisikan properti yang diterima oleh komponen Kartu
interface Card {
	// imageSrc: string 
	title: string 
	description: string 
	stack: string 
}

// Komponen Kartu
const Card =({stack, title, description}: Card) => {
	return (
		<>
			<div className='card card-compact rounded-3xl shadow-sm dark:bg-slate-300 dark:text-slate-300'>
				{/* <figure>
					<img src={imageSrc} alt='Card Image' />
				</figure> */}
				<div className='card-body p-3 bg-astral-50 rounded-lg dark:bg-astral-500 dark:hover:bg-astral-400 hover:bg-astral-100'>
					<h2 className='card-title font-bold text-xl text-astral-700 dark:text-astral-100'>{title}</h2>
					<p className="text-astral-700 dark:text-astral-100 text-sm leading-relaxed">{description}</p>
          <span className="inline-flex items-center bg-astral-100 dark:bg-astral-400 rounded-md px-2 py-1 mt-2 text-xs font-medium text-astral-700 dark:text-astral-100 ring-1 ring-inset ring-blue-700/10">{stack}</span>
				</div>
			</div>
		</>
	)
}

export default Card

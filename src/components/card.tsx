
// Definisikan properti yang diterima oleh komponen Kartu
interface Card {
	imageSrc: string // Sumber gambar untuk kartu
	title: string // Judul kartu
	description: string // Deskripsi kartu
	stack: string // Tanggal kartu
}

// Komponen Kartu
const Card =({stack, title, description, imageSrc}: Card) => {
	return (
		<>
			<div className='card card-compact w-96 rounded-2xl  shadow-sm dark:bg-slate-300 dark:text-slate-300'>
				<figure>
					<img src={imageSrc} alt='Card Image' />
				</figure>
				<div className='card-body p-3 bg-slate-50'>
					<h2 className='card-title font-semibold text-xl text-astral-800 dark:text-astral-800'>{title}</h2>
					<p className="text-astral-800 dark:text-astral-800 leading-relaxed">{description}</p>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 mt-2 text-xs font-medium text-astral-800 dark:text-astral-800 ring-1 ring-inset ring-blue-700/10">{stack}</span>
				</div>
			</div>
		</>
	)
}

export default Card

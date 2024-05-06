import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

function App() {
	return (
		<>
			<header className='sticky top-0 z-50'>
      <Navbar  title="Basic React" links={[{ text: 'Project', url: '/project' }]}/>
      </header>
			
			<main className='bg-white dark:bg-slate-800'>
				<Outlet />
			</main>
		</>
	)
}

export default App
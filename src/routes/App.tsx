import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

function App() {
	return (
		<>
			<header className='sticky top-0 z-50'>
      <Navbar  title="Basic React" links={[{ text: 'Learn', url: '/learn' }, { text: 'Project', url: '/project' }]}/>
      </header>
			
			<main >
				<Outlet />
			</main>
		</>
	)
}

export default App
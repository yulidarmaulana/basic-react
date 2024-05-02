import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

function App() {
	return (
		<>
			<header>
      <Navbar  title="Basic React" links={[{ text: 'Basic', url: '/basic' }, { text: 'Project', url: '/project' }]}/>
      </header>
			
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default App
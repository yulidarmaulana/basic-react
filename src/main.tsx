import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/error'
import App from './routes/App'
import Index from './pages'
import Project from './pages/project'
import Todo from './pages/todo/todo'
// import GitHubUserFinder from './components/GitHubUserFinder';
import Finder from './pages/finder/finder'
// import Finder from './pages/finder/finder'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Index />
			},

			{
				path: '/project',
				element: <Project />
			},
			{
				path: '/todo',
				element: <Todo />
			},
			{
				path: '/finder',
				element: <Finder />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

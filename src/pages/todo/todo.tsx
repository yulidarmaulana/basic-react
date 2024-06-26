import { FC } from 'react'
import { AddTodo } from '../../components/todo/AddTodo'
import { TodoList } from '../../components/todo/TodoList'
import { Toaster } from 'react-hot-toast'
import { TodoProvider } from '../../context/TodoContext'

const Todo: FC = () => {
	return (
		<>
			<section className='relative h-screen'>
				<div className='mx-auto h-full bg-white py-16 dark:bg-slate-800'>
					<p className='text-center text-2xl font-bold text-astral-700 dark:text-astral-100'>
						Todo
					</p>
					<div>
						<TodoProvider>
							<Toaster position='top-center' />
							<AddTodo />
							<TodoList />
						</TodoProvider>
					</div>
				</div>
			</section>
		</>
	)
}

export default Todo

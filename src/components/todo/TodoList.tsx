import { TodoItem } from './TodoItem'
import { useTodo } from '../../context/useTodo'
// import { SiStarship } from 'react-icons/si'

export const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-medium text-center rounded-xl bg-slate-300 text-slate-600 dark:bg-slate-600 dark:text-slate-300">
          {/* <SiStarship className="text-5xl" /> */}
          You have nothing to do!
        </h1>
      </div>
    )
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

import './App.css';
import React, { useEffect, useState,useReducer } from 'react';
import TodoFilter from './components/TodoFilter/TodoFilter';
import { DarkModeProvider } from './context/DarkModeContext';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';
import TodoListWithReducer from './components/TodoList/TodoListWithReducer';
import todoReducer from './reducer/todo-reducer';

const filters = ['all', 'active', 'completed'];

const today = new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(
  new Date(),
);

function App() {
  const [filter, setFilter] = useState(filters[0]);
  // const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
	const [todos, dispatch] = useReducer(todoReducer, [], readTodosFromLocalStorage);

  const counts = {
    all: todos.length,
    active: todos.filter((t) => t.status === 'active').length,
    completed: todos.filter((t) => t.status === 'completed').length,
  };

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

  return (
    <>
      <DarkModeProvider>
				<header className='header'>
					<h1 className='h1'>{today}</h1>
				</header>
        <main>
          <div className="container">
						<div className="todo-title-header">Todo List</div>
            <TodoFilter
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
              counts={counts}
            />
            <TodoListWithReducer filter={filter} todos={todos} dispatch={dispatch} />
          </div>
        </main>
        <DarkModeButton />
      </DarkModeProvider>
    </>
  );
}

export default App;

function readTodosFromLocalStorage() {
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
}
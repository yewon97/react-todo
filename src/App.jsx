import './App.css';
import React, { useEffect, useState } from 'react';
import AppToDo from './components/AppToDo';
import Header from './components/Header/Header';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import { DarkModeProvider } from './context/DarkModeContext';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

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
        <Header />
        <main>
          {/* <AppToDo /> */}
          <div className="container">
            <TodoHeader />
            <TodoFilter
              filters={filters}
              filter={filter}
              onFilterChange={setFilter}
              counts={counts}
            />
            <TodoList filter={filter} todos={todos} setTodos={setTodos} />
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
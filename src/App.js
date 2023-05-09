import './App.css';
import React, { useState } from 'react';
import AppToDo from './components/AppToDo';
import Header from './components/Header/Header';
import ModeButton from './components/ModeButton';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
	const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);

	const counts = {
    all: todos.length,
    active: todos.filter(t => t.status === 'active').length,
    completed: todos.filter(t => t.status === 'completed').length,
  };

  return (
    <>
      <Header />
      <main>
        {/* <AppToDo /> */}
        <div className='container'>
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
      <ModeButton />
    </>
  );
}

export default App;

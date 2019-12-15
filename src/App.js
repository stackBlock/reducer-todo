import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App () {
	return (
		<div className='App'>
			<nav className='navBar'>
				<h1>Reducer ToDo List</h1>
			</nav>
			<ToDoList />
		</div>
	);
}

export default App;

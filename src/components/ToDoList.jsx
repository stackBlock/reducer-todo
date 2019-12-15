import React, { useReducer } from 'react';
import { reducer, toDo } from '../reducers/Reducer';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
	const [ state, dispatch ] = useReducer(reducer, toDo);

	return (
		<div className='TheToDoList'>
			<div className='ChildOfTheToDoList'>
				<ToDoForm dispatch={dispatch} />
				{state.map((todo) => {
					return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />;
				})}
			</div>
		</div>
	);
};

export default ToDoList;

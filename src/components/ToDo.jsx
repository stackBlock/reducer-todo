import React from 'react';

const ToDo = ({ todo, dispatch }) => {
	const toggleCompleted = () => {
		dispatch({
			type    : 'TOGGLE_COMPLETED',
			payload : todo.id
		});
	};

	return (
		<div className='ListItemsParent'>
			<div className='ListItems'>
				{todo.completed ? '✅' : '👉'}
				<h3
					className={`todo ${todo.completed ? 'completed' : ''}`}
					onClick={toggleCompleted}
					style={{ textDecoration: todo.completed ? 'line-through' : '' }}
				>
					{todo.item}
				</h3>
			</div>
		</div>
	);
};

export default ToDo;

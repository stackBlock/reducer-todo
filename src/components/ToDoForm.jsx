import React, { useState } from 'react';

const ToDoForm = ({ dispatch }) => {
	const [ item, setItem ] = useState('');

	const handleChanges = (e) => {
		setItem(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: item });
		setItem('');
	};
	const ClearSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_COMPLETED' });
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='Form'>
				<label>
					<input
						className='Input'
						id={Date.now()}
						type='text'
						name='todo'
						value={item}
						onChange={handleChanges}
					/>
				</label>
				<div>
					<button className='Button' onClick={handleSubmit}>
						Add ToDo
					</button>
					<button className='Button' onClick={ClearSubmit}>
						Clear ToDo
					</button>
				</div>
			</form>
		</div>
	);
};

export default ToDoForm;

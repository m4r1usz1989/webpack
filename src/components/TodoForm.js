import React from 'react';
import style from './TodoForm.css';

const TodoForm = props =>
<div className={style.TodoForm}>
<button onClick={() => props.add(document.getElementsByTagName('button').value)}>Add task</button>
</div>;

export default TodoForm;
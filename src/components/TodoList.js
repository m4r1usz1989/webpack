import React from 'react';
import style from './TodoList.css';

const TodoList = props =>
<ul className={style.TodoList}>
    {props.data.map(data => <li key={data.id} onClick={() => props.remove(data.id)}>{data.text}</li>)}
</ul>;

export default TodoList;
import React from 'react';
import style from './Title.css';

const Title = props =>
<div className={style.title}>
<h1>{props.title}</h1>
<p>Number of task: {props.taskNumber}</p>
</div>;

export default Title;
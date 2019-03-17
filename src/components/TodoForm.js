import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <input type="text" value={this.state.value} onChange={(e) => this.setState({
                    value: e.target.value
                })}/>
                <button onClick={() => this.props.add(this.state.value)}>
                    Add task
                </button>
            </div>
        );
    }
}

export default TodoForm;
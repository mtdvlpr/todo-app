import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        id={id}
                        type="checkbox"
                        checked={completed}
                        onChange={this.props.toggleComplete.bind(this, id)} /> 
                    {' '}
                    <label 
                        htmlFor={id} 
                        style= {{textDecoration: completed ? 
                            'line-through' : 'none'}}>
                    {title}</label>
                    <button 
                        onClick={this.props.delTodo.bind(this, id)}
                        className="delBtn">x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem

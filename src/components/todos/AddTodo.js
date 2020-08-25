import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== '') {
            this.props.addTodo(this.state.title);
            this.setState({title: ''});
        } 
    }

    onChange = (e) => this.setState({title: e.target.value})

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text" 
                    name="title"
                    style={{flex: '10', paddding: '5px'}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange} />
                <input
                    type="submit"
                    vallue="Submit"
                    className="btn"
                    style={{flex: '1'}} />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: Proptypes.func.isRequired
}

export default AddTodo

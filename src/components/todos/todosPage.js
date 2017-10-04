import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todosActions from '../../actions/todosActions';

class TodosPage extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state={
            todo:{
                title:""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const todo = this.state.todo;
        todo.title = event.target.value;
        this.setState({todo:todo});
    }

    onClickSave(){
        this.props.actions.createTodo(this.state.todo);
    }

    todoRow(todo, index){
        return <h1>
                    <span className="label label-default"
                  key={index}>
                {todo.title}
            </span>
        </h1>;
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                {this.props.todos.map(this.todoRow)}
                <h2>Add Todo</h2>

                <div className="form-group">
                    <label>Todos:</label>
                    <input type="text"
                           className="form-control"
                           onChange={this.onTitleChange}
                           value={this.state.todo.title}/>
                </div>

                <button type="button"
                        className="btn btn-primary"
                        value="Save"
                        onClick={this.onClickSave}>
                    Save
                </button>

            </div>
        );
    }
}

TodosPage.propTypes={
    todos:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        todos:state.todos
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(todosActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
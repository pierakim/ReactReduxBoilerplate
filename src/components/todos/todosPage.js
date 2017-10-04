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
        console.log('todos: ',todo);
        todo.title = event.target.value;
        this.setState({todo:todo});
        console.log('this.state: ',this.state);
    }

    onClickSave(){
        this.props.actions.createTodo(this.state.todo);
    }

    todoRow(todo, index){
        return <div key={index}>{todo.title}</div>;
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                {this.props.todos.map(this.todoRow)}
                <h2>Add Todo</h2>

                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.todo.title} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
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
        todos:state.todos  //property from the courseReducer
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(todosActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
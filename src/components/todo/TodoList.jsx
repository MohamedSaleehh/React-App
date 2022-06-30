import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {delTodoAction} from '../../redux/index'


const TodoList = () => {

  const todos = useSelector(state=>state.todos);
  const dispatch = useDispatch()

  const deleteTodo = (id) => {
    dispatch(delTodoAction(id))
  }

  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex">
            <div className="text">
              <p>Title : {todo.title}</p>
              <p>Content : {todo.content}</p>
            </div>
            </li>
            <div>
              <a className='btn btn-danger' onClick={()=>deleteTodo(i)}>Remove To-DO</a>
            </div>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
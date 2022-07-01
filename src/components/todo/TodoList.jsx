import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import {delTodoAction} from '../../redux/index'
import {deleteTodo} from '../../redux/features/todoSlice'


const TodoList = () => {

  const todos = useSelector(state=>state.todos.todos);
  const dispatch = useDispatch()
  const delete_Todo = (id) => {
    dispatch(deleteTodo(id))
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
              <button className='btn btn-danger' onClick={()=>delete_Todo(i)}>Remove To-DO</button>
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
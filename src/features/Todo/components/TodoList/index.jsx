import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

function TodoList({ todoList = [], onTodoClick = null }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }

    return (
        <ul className="todo-List">
            {todoList.map((todo, idx) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
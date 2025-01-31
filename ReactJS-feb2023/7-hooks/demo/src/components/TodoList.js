import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    todos,
    onTodoAddClick,    
}) => {
    return (
        <div style={{ width: '30%', margin: '10px auto' }} >
            <h3>Todo List</h3>
            <ListGroup style={{marginBottom: '10px'}} >
                {todos.map(x => <TodoItem key={x._id} {...x} />)}
            </ListGroup>

            <Button variant="primary" onClick={onTodoAddClick}>Add</Button>
        </div>
    );
};
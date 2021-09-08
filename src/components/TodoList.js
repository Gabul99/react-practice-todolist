import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState, useTodoDate } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState()
  const [date, setDate] = useTodoDate()

  return (
      <TodoListBlock>
        {
          todos.filter(todo => {
            return (
                todo.date.year === date.year
                && todo.date.month === date.month
                && todo.date.date === date.date
            )
          })
              .map(todo => (
              <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
              />
          ))
        }
      </TodoListBlock>
  );
}

export default TodoList;
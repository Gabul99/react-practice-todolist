import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    font-size: 21px;
    color: #868e96;
  }
  .tasks-left {
    font-size: 18px;
    color: #20c997;
    margin-top: 40px;
    font-weight: bold;
  }
`

function TodoHead() {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth()
  let date = today.getDate()
  let day = today.toLocaleDateString('ko-KR', {weekday: "long"})

  const todos = useTodoState()

  return (
      <TodoHeadBlock>
        <h1>
          {year}년 {month + 1}월 {date}일
        </h1>
        <div className="day">
          {day}
        </div>
        <div className="tasks-left">
          할 일 {todos.filter(todo => !todo.done).length}개 남음
        </div>
      </TodoHeadBlock>
  )
}

export default TodoHead;
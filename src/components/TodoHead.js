import React from "react";
import styled from "styled-components";
import { useTodoState, useTodoDate } from "../TodoContext";

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
  const todos = useTodoState()

  const [date, setDate] = useTodoDate()
  const currentDate = date
  const newDay = new Date(currentDate.year, currentDate.month - 1, currentDate.date)
  let day = newDay.toLocaleDateString('ko-KR', {weekday: "long"})

  return (
      <TodoHeadBlock>
        <h1>
          {currentDate.year}년 {currentDate.month}월 {currentDate.date}일
        </h1>
        <div className="day">
          {day}
        </div>
        <div className="tasks-left">
          할 일 {todos.filter(todo => todo.date.year === date.year
            && todo.date.month === date.month
            && todo.date.date === date.date
            && !todo.done).length}개 남음
        </div>
      </TodoHeadBlock>
  )
}

export default TodoHead;
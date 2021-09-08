import React from "react";
import styled, {css} from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/all";
import { useTodoDate } from "../TodoContext";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`

const TodoTemplateButton = styled.button`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 0px;
  top: 10%;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
          props.isForward &&
          css`
            left: 100%;
          `}
`

function TodoTemplate({children}) {
  const [date, setDate] = useTodoDate()
  const onDateForward = () => {
    const today = date
    const tomorrow = new Date(today.year, today.month - 1, today.date)
    tomorrow.setDate(tomorrow.getDate() + 1)
    setDate({
      year: tomorrow.getFullYear(),
      month: tomorrow.getMonth() + 1,
      date: tomorrow.getDate()
    })
  }

  const onDateBack = () => {
    const today = date
    const tomorrow = new Date(today.year, today.month - 1, today.date)
    tomorrow.setDate(tomorrow.getDate() - 1)
    setDate({
      year: tomorrow.getFullYear(),
      month: tomorrow.getMonth() + 1,
      date: tomorrow.getDate()
    })
  }

  return (
      <div>
        <TodoTemplateBlock>
          <TodoTemplateButton onClick={onDateBack}>
            <MdArrowBack/>
          </TodoTemplateButton>
          {children}
          <TodoTemplateButton isForward={true} onClick={onDateForward}>
            <MdArrowForward/>
          </TodoTemplateButton>
        </TodoTemplateBlock>
      </div>
  )
}

export default TodoTemplate
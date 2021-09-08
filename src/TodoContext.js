import React, {useReducer, createContext, useContext, useRef, useState} from "react";

const today = new Date()
const initialDate = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: today.getDate()
}

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
    date: initialDate
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
    date: initialDate
  },
  {
    id: 3,
    text: 'Context 생성하기',
    done: false,
    date: initialDate
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
    date: initialDate
  }
]

const TodoDateContext = createContext()
const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(todo =>
          todo.id === action.id ? {...todo, done: !todo.done} : todo
      )
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export function TodoProvider({children}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5)
  const currentDate = useState(initialDate)

  return (
      <TodoDateContext.Provider value={currentDate}>
        <TodoStateContext.Provider value={state}>
          <TodoDispatchContext.Provider value={dispatch}>
            <TodoNextIdContext.Provider value={nextId}>
              {children}
            </TodoNextIdContext.Provider>>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </TodoDateContext.Provider>
  );
}

export function useTodoDate() {
  const context = useContext(TodoDateContext)
  if (!context) {
    throw new Error('Cannot find TodoProvider: Date')
  }
  return context
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider: State');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider: Dispatch');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider: NextId');
  }
  return context;
}
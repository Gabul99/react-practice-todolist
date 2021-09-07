import logo from './logo.svg';
import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }`;


function App() {
  return (
      <>
        <GlobalStyle/>
        <TodoTemplate>뚜두뚜두</TodoTemplate>
      </>
  );
}

export default App;

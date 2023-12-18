import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import uuid from "react-uuid";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

export type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목4",
      contents: "내용4",
      isDone: true,
    },
  ]);

  return (
    <>
      <StHeader> My Todo List</StHeader>
      <StMain>
        <div>
          <Input todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} listIsDone={false} />
          <Todolist todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </StMain>
    </>
  );
}

export default App;

const StHeader = styled.div`
  background-color: #edf5ae;
  padding: 10px;
  font-weight: bolder;
`;
const StMain = styled.div`
  background-color: #88b1ab;
  padding: 10px;
`;

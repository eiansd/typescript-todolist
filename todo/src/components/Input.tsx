import React, { useState } from "react";
import uuid from "react-uuid";
import { Todo } from "../App";
import styled from "styled-components";

function Input({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo: Todo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        <StInput
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></StInput>
        <StInput
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        ></StInput>
        <StButton type="submit"> 입력</StButton>
      </form>
    </div>
  );
}

const StInput = styled.input`
  margin-right: 5px;
  padding: 5px;
`;

const StButton = styled.button`
  padding: 3.5px;
  cursor: pointer;
`;
export default Input;

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
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></StInput>
        <StInput
          placeholder="내용을 입력해주세요"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        ></StInput>
        <StButton
          type="submit"
          onClick={() => {
            setTitle("");
            setContents("");
          }}
        >
          추가하기
        </StButton>
      </form>
    </div>
  );
}

const StInput = styled.input`
  margin-right: 5px;
  padding: 5px;
  outline: none;
`;

const StButton = styled.button`
  padding: 3.5px;
  cursor: pointer;
  float: right;
  padding: 7px 20px;
  border-radius: 10px;
  border: 0px;
  background-color: #16ac16;
  font-weight: bold;
  color: white;
`;
export default Input;

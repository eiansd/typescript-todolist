import React from "react";
import styled from "styled-components";
import { Todo } from "../App";

function Todolist({
  todos,
  setTodos,
  listIsDone,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  listIsDone: boolean;
}) {
  const todoList = todos.filter((todo: Todo) => {
    return todo.isDone === listIsDone;
  });

  return (
    <div>
      <h2>{listIsDone ? "완료 목록" : "할 일 목록"}</h2>
      {todoList.map(function (todo: Todo) {
        return (
          <StListWrap key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.contents}</p>
            <p>완료 여부: {todo.isDone.toString()}</p>
            <StClearButton
              onClick={() => {
                const newTodos = todos.map((item) => {
                  if (item.id === todo.id) {
                    return {
                      ...item,
                      isDone: !item.isDone,
                    };
                  } else {
                    return item;
                  }
                });
                setTodos(newTodos);
              }}
            >
              완료
            </StClearButton>
            <StDeleteButton
              onClick={() => {
                const deletedTodos = todos.filter((item) => {
                  return item.id !== todo.id;
                });
                setTodos(deletedTodos);
              }}
            >
              삭제
            </StDeleteButton>
          </StListWrap>
        );
      })}
    </div>
  );
}

const StListWrap = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 0px 0px 10px 10px;
  border-radius: 10px;
`;
const StClearButton = styled.button`
  margin-right: 3px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #39c439;
`;

const StDeleteButton = styled.button`
  margin-right: 3px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #f64949;
`;

export default Todolist;

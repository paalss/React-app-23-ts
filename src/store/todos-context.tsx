import React from "react";
import { useState } from "react";
import { ProgressPlugin } from "webpack";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void; // function  type definition
  removeTodo: (id: string) => void;
};

// <>: generic type feature
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {}, // concrete funciton defintition
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

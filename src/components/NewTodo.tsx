import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  //  FormEvent: form submission
  //  MouseEvent: onClick
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ts skjønner ikke at inputRef ikke possibly kan extracte denne value før form submission
    // ?: ta høyde for at den kan være null. try to get me that value, if not, store null.
    // !: du vet at possibly null value vil aldri kan være null. Når du er 100% sikker på at det ikke kan bli null
    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;

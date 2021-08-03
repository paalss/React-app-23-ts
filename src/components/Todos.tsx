import { useContext } from "react";
import ListElement from "./ListElement";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

// type definition, functional compoent.
// type annotation og dette objektet har alltid children prop
// own props merges med FC props
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <ListElement
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          itemText={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;

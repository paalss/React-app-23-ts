import classes from "./ListElement.module.css";

const ListElement: React.FC<{ onRemoveTodo: () => void; itemText: string }> = (
  props
) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.itemText}
    </li>
  );
};

export default ListElement;

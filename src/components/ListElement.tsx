import classes from './ListElement.module.css'

const ListElement: React.FC<{ itemText: string }> = (props) => {
  return <li className={classes.item}>{props.itemText}</li>
}

export default ListElement
import classes from './ListElement.module.css'

const ListElement: React.FC<{ onPress: (id: string) => void, itemText: string }> = (props) => {
  const pressHandler = (id: string) => {
    props.onPress(id)
  }
  return <li onClick={pressHandler} className={classes.item}>{props.itemText}</li>

}

export default ListElement
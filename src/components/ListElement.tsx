import classes from './ListElement.module.css'

const ListElement: React.FC<{ onPress: (id: string) => void, item: {id: string, text: string} }> = (props) => {
  const pressHandler = () => {
    props.onPress(props.item.id)
  }
  return <li onClick={pressHandler} className={classes.item}>{props.item.text}</li>

}

export default ListElement
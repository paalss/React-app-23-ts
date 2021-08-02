import Todo from '../models/todo'

const ListElement: React.FC<{ itemText: string }> = (props) => {
  return <li>{props.itemText}</li>
}

export default ListElement
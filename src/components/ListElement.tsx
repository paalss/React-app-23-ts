import Todo from '../models/todo'


const ListElement: React.FC<{ item: Todo }> = (props) => {
  return <li key={props.item.id}>{props.item.text}</li>
}

export default ListElement
import Todo from '../models/todo'
import ListElement from './ListElement'

// type definition, functional compoent.
// type annotation og dette objektet har alltid children prop
// own props merges med FC props
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <ListElement item={item} />
      ))}
    </ul>
  )
}

export default Todos
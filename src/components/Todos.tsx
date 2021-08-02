import Todo from '../models/todo'
import ListElement from './ListElement'

import classes from './Todos.module.css'

// type definition, functional compoent.
// type annotation og dette objektet har alltid children prop
// own props merges med FC props
const Todos: React.FC<{ onRemoveTodo: (id: string) => void, items: Todo[] }> = (props) => {
  const clickHandler = (id: string) => {
    console.log('llll')
    props.onRemoveTodo(id)
  }
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <ListElement onPress={clickHandler} key={item.id} itemText={item.text} />
      ))}
    </ul>
  )
}

export default Todos
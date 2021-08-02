// type definition, functional compoent.
// type annotation og dette objektet har alltid children prop
// own props merges med FC props
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default Todos
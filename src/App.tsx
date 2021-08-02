import Todos from './components/Todos';
import Todo from './models/todo'

function App() {
  const todos = [
    new Todo('Learn react'),
    new Todo('mysql cloud')
  ]
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;

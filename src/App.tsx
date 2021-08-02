import Todos from './components/Todos';

function App() {
  const items = [
    'learn react',
    'mysql cloud database'
  ]
  return (
    <div>
      <Todos items={items}/>
    </div>
  );
}

export default App;

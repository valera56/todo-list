
import Img1 from './components/Img1';
import TodosContextProvider from './contexts/TodosContext';
import './App.css';
import AddTodo from './components/AddToto';
function App() {
  return (
    <div className="App">
      <TodosContextProvider>
      < Img1/>
      <AddTodo />
     </TodosContextProvider>
    </div>
  );
}
export default App;

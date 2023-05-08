import './App.css';
import { Hello } from './new-files/Hello';
import { World } from './new-files/World';

function App() {
  return (
   <div className='container'>
    <h1>soma de valores</h1>
    <small style={{paddingBottom: "10px"}}>Se algum valor retornar negativo, deve ser apresentado zero (0)</small>
    <Hello/>
    <World/>
   </div>
  );
}

export default App;

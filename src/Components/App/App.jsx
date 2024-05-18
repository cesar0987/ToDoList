import { useState } from 'react';
import './App.css';

function App() {
  const [toDoList,setTodoList] = useState([]);
  const [inputValue,setInputValue] = useState('');

  const handleAdd = (event) => {
    event.preventDefault();
    //Valida si el input está vacío, si es así, muestra un alert
    (!inputValue) && alert('Campo vacío');
    //Retorna si el input está vacío
    if(!inputValue) return;
    //Valida si la lista ya tiene 6 elementos, si es así, muestra un alert
    (toDoList.length === 6) && alert('No se pueden agregar más elementos');//Valida si la lista ya tiene 6 elementos
    //Valida si el elemento ya existe en la lista, si no existe y la lista es menor a 6 elementos, agrega el elemento
    (toDoList.includes(inputValue) ? alert('Elemento ya existe') : toDoList.length < 6 && setTodoList([...toDoList,{text: inputValue, checked: false}]));
    setInputValue('');//Limpia el elemento de entrada
  }
  const handleDelete = (index) => {
    const newList = toDoList.filter((item,i) => i !== index);
    setTodoList(newList);
  }
  const handleCheck = (index) => {
    const newList = toDoList.map((item,i) => {
      if(i === index){
        console.log(item.checked)
        item.checked = !item.checked;
      }
      return item;
    });
    console.log(newList);
    setTodoList(newList);
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="inputContainer">
        <form onSubmit={handleAdd}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button >Add</button>
        </form>
      </div>
      <div className="listContainer">
        {toDoList.map((item,index) => (
          <div key={index} className="listItem">
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(index)} />
            <p style={{textDecoration: item.checked ? 'line-through' : 'none'}}>{item.text}</p>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [todo, setToDo] = useState("");

  const onChange = (event) => setToDo(event.target.value);
  const onClick = () => console.log(todo);

  return (
    <div>
      <input onChange={onChange} value={todo} type="text" placeholder="Write your todo..."></input>
      <button onClick={onClick}>Add ToDo</button>
    </div>
  )
}

export default App;




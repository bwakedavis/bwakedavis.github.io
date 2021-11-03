---
title: A walk through reactjs
date: "2020-09-03T22:12:03.284Z"
description: "React Hooks"
---


```js
import React, { useState } from "react";

function Todo({todo, index, completeTodo, removeTodo}){
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}
      <div>
        <button onClick = {() => completeTodo(index)}>Complete</button>
        <button onClick = {() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value
      )}/>
    </form>
  )
}

function App() {
  const [todos, setTodos] =  useState([
    {
      text: "Learn React",
      isCompleted: false
    },
    {
      text: "Meet a friend",
      isCompleted: false
    },
    {
      text: "Build timer app",
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} 
          index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
```

```js
import React, { useState } from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default ClickCounter
```

It translates to regular JavaScript.

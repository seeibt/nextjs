"use client";

import ListItem from '@/components/ListItem/index.js';
import React from 'react'
import { useState, useEffect } from 'react';
import List from '../components/index.js'

function Home() {

  useEffect(() => {
    const dadosApi = receberDadosApi();
  }, []);

  async function receberDadosApi(){
      const responde = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await responde.json();
      console.log(data)

      setTodo(data);

      return data;
  };

  const [todos, setTodo] = useState([]);
  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if(todos){
      setTodo(JSON.parse(todos));
    }
  }, []);

  const [newTodoDescription, setNewTodoDescription] = useState('');

  function adicionarNewTodo(){
    const todoObject = {
      title: newTodoDescription,
      feito: false
    }

    if(newTodoDescription !== ''){
      setTodo([
        ...todos,
        todoObject
      ]);
      setNewTodoDescription('');
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function excluirToDo(titleTodo){
    setTodo(todos.filter((todo) => todo.title !== titleTodo));
  }

  return (
    <>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        placeholder="Digite uma nova tarefa" 
        value={newTodoDescription} 
        onChange={(e) => setNewTodoDescription(e.target.value)}
      />
      <button onClick={adicionarNewTodo}>Adicionar</button>
      <List>
        {todos && todos.length === 0 && <p>Não há tarefas</p>}
        {todos && todos.map((todo) => (
          <ListItem 
            title={todo.title} 
            done={todo.completed} 
            excluirToDo={() => excluirToDo(todo.title)}
          />
        ))} 
      </List>
    </>
  )
}

export default Home

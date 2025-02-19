import { createContext, useState } from 'react';

const Todos = createContext(null);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const tempTodos = [...todos];
    tempTodos.push(todo);
    setTodos(tempTodos);
  };

  const doneTodo = (id) => {
    // TODO: 완료 처리
    const tmepTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      }
      return todo;
    });
    setTodos(tmepTodos);
  };

  const deleteTodo = (id) => {
    // TODO: 삭제 처리
    const tmepTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(tmepTodos);
  };

  return (
    <Todos.Provider value={{ todos, addTodo, deleteTodo, doneTodo }}>
      {children}
    </Todos.Provider>
  );
};

export default Todos;

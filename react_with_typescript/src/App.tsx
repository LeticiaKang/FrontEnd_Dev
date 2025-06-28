import { useState, useRef, useEffect } from 'react';
import './App.css';
import Editor from "./component/Editor";
import { Todo } from '@/types/todo';
import TodoItem from './component/TodoItem';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(1);

  /**
   * 추가하기
   * 
   * @param text 
   * @returns 
   */
  const onClickAdd = (text: string) => {
    if(text === "") {
      alert("텍스트를 입력해주세요.");
      return;
    }

    setTodos([
      ...todos, // 원본값을 넣어준다.
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  /**
   * 삭제 버튼
   */
  const onClickDelButton = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Editor onClickAdd={onClickAdd} />
        
        <div>
          {todos.map((todo, index) => (
            <TodoItem 
              key={todo.id} 
              {...todo} 
              displayNumber={index + 1}
              onClickDelButton={onClickDelButton}
            />
          ))}
        </div>
        
    </div>
  );
}

export default App;

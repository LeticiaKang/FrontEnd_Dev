import { useRef, useEffect, useReducer } from 'react';
import './App.css';
import Editor from "./component/Editor";
import { Todo } from '@/types/todo';
import TodoItem from './component/TodoItem';

type Action = 
  | {
      type: "CREATE",
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "DELETE", id: number; }


function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

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

    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text
      }
    })
  };

  /**
   * 삭제 버튼
   */
  const onClickDelButton = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id
    })
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

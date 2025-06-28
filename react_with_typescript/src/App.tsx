import { useRef, useEffect, useReducer, createContext, useContext } from 'react';
import './App.css'
import Editor from "./component/Editor";
import { Todo } from './types/todo';
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

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onClickAdd: (text: string) => void;
  onClickDelButton: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  
  if (!dispatch) {
    throw new Error("useTodoDispatch must be used within a TodoDispatchProvider");
  }

  return dispatch;
}

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
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelButton }}>
          <Editor />
            <div>
              {todos.map((todo, index) => (
                <TodoItem key={todo.id} {...todo} displayNum={index+1}/>
              ))}
            </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;

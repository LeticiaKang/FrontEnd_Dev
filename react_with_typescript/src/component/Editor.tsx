import { useState, useContext } from "react";
import { useTodoDispatch } from "App";

export default function Editor() {
    const dispatch = useTodoDispatch();
    const [text, setText] = useState("");

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    };

    return <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>추가</button>
    </div>
}
import { useState } from "react";
import { EditorProps } from "@/types/props"


export default function Editor(props: EditorProps) {
    const [text, setText] = useState("");

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const onClickButton = () => {
        props.onClickAdd(text);
        setText("");
    };

    return <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>추가</button>
    </div>
}
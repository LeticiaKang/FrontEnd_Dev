import { Todo } from "@/types/todo";
import { useTodoDispatch } from "App";

interface Props extends Todo {
    displayNum: number;
};

export default function TodoItem(props: Props) {
    const dispatch = useTodoDispatch();

    const onClickDelete = () => {
        dispatch.onClickDelButton(props.id);
    }

    return (
        <div>
            <ul>
                {props.displayNum}. {props.content}
                <button onClick={onClickDelete}>삭제</button>
            </ul>
            
        </div>
    );
}
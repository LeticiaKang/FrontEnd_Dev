import { Todo } from "@/types/todo";

interface Props extends Todo {
    onClickDelButton: (id: number) => void;
    displayNumber: number;
};

export default function TodoItem(props: Props) {

    const onClickDelete = () => {
        props.onClickDelButton(props.id);
    }

    return (
        <div>
            <ul key={props.id}>
                {props.displayNumber}. {props.content}
                <button onClick={onClickDelete}>삭제</button>
            </ul>
            
        </div>
    );
}
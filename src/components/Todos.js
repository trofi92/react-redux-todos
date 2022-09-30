import { useState } from "react";
import { useSelector } from "react-redux";

const TodoItem = ({ todo, onToggle, onRemove, onEdit }) => {
  const select = useSelector((state) => state.todos);
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const onEditInput = (e) => {
    setNewText(e.target.value);
  };
  const onEditing = () => {
    setEditing(true);
  };
  const onConfirm = () => {
    setEditing(false);
    onEdit(todo.id, newText);
  };
  console.log(todo.text);
  console.log(newText);
  console.log(...select.todos);
  //www.loom.com/share/44ddf8d3c4ac4fa48138d9bf8ecf5d57

  https: return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
        required
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
      {editing ? (
        <>
          <form onSubmit={onConfirm}>
            <input
              onSubmit={onConfirm}
              onChange={onEditInput}
              type="text"
              placeholder="새로운 할 일을 입력해주세요"
              required
            ></input>
            <button
              type="button"
              className="confirm"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </form>
        </>
      ) : (
        <button type="button" className="editing" onClick={onEditing}>
          Edit
        </button>
      )}
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
  onEdit,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(""); // 등록 후 인풋 초기화
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} required onChange={onChange} />
        <button type="submit">submit</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;

import { connect } from "react-redux";
import {
  changeInput,
  insert,
  toggle,
  remove,
  edit,
} from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
  edit,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
      onEdit={edit}
    />
  );
};

export default connect(
  // 1. get 'todos' using destructuring
  // 2. using 'todos.input' (instead of 'state.todos.input')
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
    edit,
  }
)(TodosContainer);

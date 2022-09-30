const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";
const EDIT = "todos/EDIT";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 0;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

export const edit = (id, text) => ({
  type: EDIT,
  id,
  text,
});

const initialState = {
  input: "",
  todos: [],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };

    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };

    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, id: action.id, text: action.text }
            : todo
        ),
      };

    default:
      return state;
  }
}

//***********onConfirm*************//
// ...state,
// todos: state.todos.map((todo) =>
//   todo.id === action.id ? { ...todo, text: action.id } : todo
// ),
export default todos;

import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setMessage, removeMessage } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));
    dispatch(setMessage(`You added '${content}' in your anecdote list`));
    setTimeout(() => dispatch(removeMessage()), 5000);
  };
  return (
    <div>
      <h1 className="me">Add new Anecdote</h1>
      <form onSubmit={addAnecdote}>
        <input name="anecdote"></input>
        <button type="submit">Add Anecdote</button>
      </form>
    </div>
  );
};

export default NewAnecdote;

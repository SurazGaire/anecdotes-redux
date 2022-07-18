import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setMessage, removeMessage } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const NewAnecdote = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
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

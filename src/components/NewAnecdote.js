import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));
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

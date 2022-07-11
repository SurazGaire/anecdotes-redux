import { useDispatch, useSelector } from "react-redux";
import { addVotes } from "../reducers/anecdoteReducer";
const Anecdote = (props) => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  // let sortedAanecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id} value={anecdote.id}>
          {anecdote.content} has <b>{anecdote.votes}</b> votes
          <button onClick={() => dispatch(addVotes(anecdote.id))}>Vote</button>
        </li>
      ))}
    </div>
  );
};
const Anecdotes = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdote />
    </div>
  );
};
export default Anecdotes;

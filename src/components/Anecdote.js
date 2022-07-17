import { useDispatch, useSelector } from "react-redux";
import { addVotes } from "../reducers/anecdoteReducer";
import { setMessage, removeMessage } from "../reducers/notificationReducer";
import Filter from "./Filter";

const Anecdote = (props) => {
  const anecdotes = useSelector((state) => {
    if (state.filter.length >= 1) {
      return state.filter;
    }
    return state.anecdotes;
  });
  const dispatch = useDispatch();
  const voteClicked = (id) => {
    dispatch(addVotes(id));
    dispatch(setMessage("You have voted"));
    setTimeout(() => dispatch(removeMessage()), 5000);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id} value={anecdote.id}>
          {anecdote.content} has <b>{anecdote.votes}</b> votes
          <button
            onClick={() => {
              voteClicked(anecdote.id);
            }}
          >
            Vote
          </button>
        </li>
      ))}
    </div>
  );
};
const Anecdotes = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdote />
    </div>
  );
};
export default Anecdotes;

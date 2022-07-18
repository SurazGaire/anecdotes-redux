import NewAnecdote from "./components/NewAnecdote";
import Anecdotes from "./components/Anecdote";
import Notification from "./components/Notification";
import { useEffect } from "react";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import anecdoteService from "./services/anecdotes";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService.getAll().then((notes) => dispatch(setAnecdotes(notes)));
  }, [dispatch]);
  return (
    <div>
      <Notification />
      <NewAnecdote />
      <Anecdotes />
    </div>
  );
};

export default App;

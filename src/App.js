import NewAnecdote from "./components/NewAnecdote";
import Anecdotes from "./components/Anecdote";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification />
      <NewAnecdote />
      <Anecdotes />
    </div>
  );
};

export default App;

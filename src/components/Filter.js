import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../reducers/filterReducer";

const Filter = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();
  const searchValue = (event) => {
    dispatch(searchResult({ content: event.target.value, state: anecdotes }));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      Filter : <input type="text" onChange={searchValue} />
    </div>
  );
};

export default Filter;

import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const COUNTER_ACTION_TYPES = {
  INCREMENT_COUNT: "counter/increment-count",
  DECREMENT_COUNT: "counter/decrement-count",
  SET_VALUE_TO_ADD: "counter/set-value-to-add",
  ADD_VALUE_TO_COUNT: "counter/add-value-to-count",
};

const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTION_TYPES.DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION_TYPES.SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case COUNTER_ACTION_TYPES.ADD_VALUE_TO_COUNT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const increment = () => {
    dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT_COUNT });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: COUNTER_ACTION_TYPES.SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: COUNTER_ACTION_TYPES.ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="bg-sky-100 border-2 border-sky-300">
      <h1 className="flex justify-center my-3 p-3 text-xl w-1/5">
        <span className="mx-1 mt-1 text-indigo-900">Current count: </span>
        <span className="px-4 py-1 text-indigo-900 bg-indigo-100 border-2 border-indigo-300">
          {state.count}
        </span>
      </h1>
      <div className="flex flex-row justify-around mb-3 w-1/5">
        <Button onClick={increment} primary>
          Increment
        </Button>
        <Button onClick={decrement} secondary>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 border-2 border-gray-300 bg-gray-50"
        />
        <Button primary outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;

import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./Utilities/sortingUtilities";

function App() {
  //Since we need to access the editing ticket state,
  // we are adding that in the initial state to access it and
  // initially we will set it to null
  const initialstate = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };
  const [state, dispatch] = useReducer(ticketReducer, initialstate);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>

        {
          //Here && is no and - it is "then".
          //It is read as if the condition is true then render the UI
        }
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>

            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
            <TicketList
              tickets={sortedTickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

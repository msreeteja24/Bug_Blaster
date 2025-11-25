import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";

function App() {
  const initialstate = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialstate);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>
      </div>
    </div>
  );
}

export default App;

import React from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;
  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };
  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

      <h3>{title}</h3>
      <p>{description}</p>

      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: { id } })}
      >
        Delete
      </button>

      {
        //Here we should not set the type to update ticket, we have to set the type to set editing ticket
        //Because when we click the button, we want to set the edit mode and the pass the information which ticket is in edit mode.
      }
      <button
        className="button"
        onClick={() =>
          dispatch({ type: "SET_EDITING_TICKET", payload: ticket })
        }
      >
        Edit
      </button>
    </div>
  );
}

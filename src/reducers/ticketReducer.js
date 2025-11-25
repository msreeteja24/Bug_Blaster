//Reducer contains two parameters - state and action

import { act } from "react";

//naming convention is - camelCasing
export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null,
      };
    //The below set editing ticket and clear editing ticket
    // are used to set the edit mode of the ticket when you want to update it
    case "SET_EDITING_TICKET":
      return {
        //When we call this action
        // we simply submit the information about which ticket
        // we are editing(editing ticket we have assigned to action.payload)
        ...state,
        editingTicket: action.payload,
      };
    case "CLEAR_EDITING_TICKET":
      return {
        //So here as we are not editing any more - it will clear the information
        ...state,
        editingTicket: null,
      };
    case "DELETE_TICKET":
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null,
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
        };
      }
    default:
      return state;
  }
}

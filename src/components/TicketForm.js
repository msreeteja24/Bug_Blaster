import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //This preventDefault is used to avoid the reloading of form when it is submitted.

    const ticketData = {
      id: new Date().toISOString(),
      Title: title,
      Description: description,
      Priority: priority,
    };

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label> Title </label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            className="form-input"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <fieldset className="priority-fieldset">
          <legend> Priority </legend>
          {Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className="priority-label">
              <input
                type="radio"
                value={value}
                checked={priority === value}
                className="priority-input"
                onChange={(e) => setPriority(e.target.value)}
              ></input>
              {label}
            </label>
          ))}
        </fieldset>

        <button type="submit" className="button" onChange={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

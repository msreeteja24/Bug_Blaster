import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priortity, setPriority] = useState("1");

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
          onChange={(e) => e.target.setTitle}
        ></input>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            className="form-input"
            onChange={(e) => e.target.setDescription}
          ></textarea>
        </div>
        <fieldset>
          <legend> Priority </legend>
        </fieldset>
      </div>
    </form>
  );
}

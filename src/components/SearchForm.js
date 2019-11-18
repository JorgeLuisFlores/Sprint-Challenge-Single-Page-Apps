import React from "react";

export default function SearchForm(props) {
  return (
    <section>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="search"
          value={props.id}
          onChange={props.handleChange}
          placeholder="Character Name"
        />

        <div>{props.name}</div>

        <button className="search-button">Search</button>
      </form>
    </section>
  );
}

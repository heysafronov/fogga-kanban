import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="kanban__header-search">
        <div className="search-icon">
          <i className="material-icons">search</i>
        </div>
        <input
          className="input-text"
          type="text"
          placeholder="Search for tasks..."
        />
      </div>
    );
  }
}

export default Search;

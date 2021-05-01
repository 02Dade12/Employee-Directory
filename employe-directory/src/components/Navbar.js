import React from "react";
import SearchForm from "./SearchForm";

function Navbar(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Employe Directory</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <SearchForm handleInputChange = {props.handleInputChange} handleFormSubmit = {props.handleFormSubmit}/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

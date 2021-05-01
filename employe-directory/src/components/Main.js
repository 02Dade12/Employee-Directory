import React, {Component} from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import API from "../utils/API";


class Main extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
      };

    componentDidMount() {
        API.getEmployee()
          .then(res => this.setState({ employees: res.data.results }))
          .catch(err => console.log(err));
      }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployee(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      }; 

    render(){
        return(
            <div><Navbar handleInputChange = {this.handleInputChange} handleFormSubmit = {this.handleFormSubmit} />
            <Table/>
            </div>
        )
    }
}

export default Main;
import React, { Component, component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      descriptiom: "",
      duration: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  };

  OnChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  OnChangeDescription = (e) => {
    this.setState({ descriptiom: e.target.value });
  };

  OnChangeDuration = (e) => {
    this.setState({ descriptiom: e.target.value });
  };

  OnChangeDate = (date) => {
    this.setState({ date: date });
  };

  onSubmit(e) {
    e.preventDefault(); //Stops the normal html behaviour when a form is submitted.

    const exercise = {
      username: this.state.username,
      descriptiom: this.state.descriptiom,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log("Exercise ", exercise);
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Name : </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.OnChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label> description : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.descriptiom}
              onChange={this.OnChangeDescription}
            ></input>
          </div>
          <div className="form-group">
            <label> Duration  : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.OnChangeDuration}
            ></input>
          </div>
          <div className="form-group">
            <label> Date : </label>
              <DatePicker selected = {this.state.date} onChange= {this.OnChangeDate} />
          </div>
        </form>
      </div>
    );
  }
}

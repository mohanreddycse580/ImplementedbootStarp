import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user_id: "",
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      address: "",
      redirectToReferrer: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      let userData = JSON.parse(sessionStorage.getItem("userData"));
      this.setState({
        users: userData
      });
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const user = {
      user_id: this.state.user_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address
    };
    console.log("user:" + user);
    if (
      this.state.user_id &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.age &&
      this.state.gender &&
      this.state.address
    ) {
      this.setState({
        redirectToReferrer: true
      });
      this.state.users.push(user);
      sessionStorage.setItem("userData", JSON.stringify(this.state.users));
      /*axios.post("userdetails.json", { user }).then(res => {
        console.log(res);
        console.log(res.data);
      }); 
      /*
      fetch("userdetails.json", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(errors => console.log(errors));

       axios
        .put("userdetails.json", {
          body: JSON.stringify(user),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
          console.log(user);
        }); */
    }
  };

  handleChange(e) {
    this.setState({
      redirectToReferrer: false
    });
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/"} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="text-center">
              <h2>ADD USER</h2>
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="userid">User Id:</label>

            <input
              type="user_id"
              className="form-control"
              name="user_id"
              placeholder="User Id"
              onChange={this.handleChange}
              required
              pattern="[a-zA-Z0-9]{6,}"
              title="Must contain at least 6 or more characters"
            />
          </div>

          <div className="form-group">
            <label for="firstName">First Name :</label>

            <input
              className="form-control"
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
              pattern="[a-zA-Z ]{1,10}"
              required
            />
          </div>

          <div className="form-group">
            <label for="lastName">Last Name :</label>

            <input
              className="form-control"
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
              pattern="[a-zA-Z ]{1,10}"
            />
          </div>
          <div className="form-group">
            <label for="age">Age :</label>

            <input
              className="form-control"
              type="number"
              name="age"
              min="0"
              max="60"
              placeholder="age"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="age">Gender:</label>
            <div className="form-group" onChange={this.handleChange}>
              <div className="col-sm-3">
                <label className="radio-inline">
                  <input
                    name="gender"
                    id="input-gender-male"
                    value="Male"
                    type="radio"
                  />
                  Male
                </label>
              </div>
              <div className="col-sm-3">
                <label className="radio-inline">
                  <input
                    name="gender"
                    id="input-gender-female"
                    value="Female"
                    type="radio"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="address">Address:</label>

            <textarea
              className="form-control"
              rows="4"
              cols="25"
              name="address"
              onChange={this.handleChange}
              required
              pattern="[a-zA-Z ]{10,100}"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddUser;

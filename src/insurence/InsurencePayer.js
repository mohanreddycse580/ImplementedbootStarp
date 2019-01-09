import React from "react";

import axios from "axios";

class InsurenePayer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      insurenceDetails: [],
      havinginsurence: false
    };
  }

  /*componentWillMount() {
    const loadData = JSON.parse(JSON.stringify(jsonData));
    console.log(loadData);
    this.setState({
      data: loadData
    });
  } */
  componentDidMount() {
    axios.get("insurencepayer.json").then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  handleChange = e => {
    console.log(e.target.value);
    //alert(e.target.value);
    if (e.target.value === "") {
      this.setState({
        insurenceDetails: "",
        havinginsurence: false
      });
    } else {
      if (e.target.value === "all") {
        const insure = this.state.data;
        this.setState({
          insurenceDetails: insure,
          havinginsurence: true
        });
      } else {
        const claim = this.state.data.filter(row => {
          return row.payer_name.match(e.target.value);
        });
        this.setState({
          insurenceDetails: claim,
          havinginsurence: true
        });
      }
    }
  };
  render() {
    const havinginsurence = this.state.havinginsurence;
    return (
      <div className="container">
        <h3>INSURENCE PAYER DETAILS </h3>
        <div className="form-group">
          <select className="form-control" onChange={this.handleChange}>
            <option value="" selected>
              Select Insurance payer
            </option>
            {this.state.data.map(function(insurence, key) {
              return (
                <option key={key} value={insurence.payer_name}>
                  {insurence.payer_name}
                </option>
              );
            })}
            <option value="all">ALL</option>
          </select>
        </div>
        {havinginsurence ? (
          <div className="tableOrder">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Payer Name</th>
                  <th>Clain Id</th>
                  <th>Claim Amount Submited</th>
                  <th>Claim Amount Approved</th>
                  <th>Claim Aproval Status</th>
                </tr>
              </thead>
              {this.state.insurenceDetails.map((row, index) => (
                <tbody>
                  <tr>
                    <td>{row.payer_name}</td>
                    <td>{row.claim_id}</td>
                    <td>{row.claim_amount_submited}</td>
                    <td>{row.claim_amount_approved}</td>
                    <td>{row.claim_aproval_status}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default InsurenePayer;

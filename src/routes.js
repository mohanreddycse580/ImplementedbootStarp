import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddUser from "./user/AddUser";
import Claim from "./claims/Claim";
import InsurenePayer from "./insurence/InsurencePayer";
import DeleteUser from "./user/DeleteUser";
import EditUser from "./user/EditUser";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddUser} />
      <Route path="/claim" component={Claim} />
      <Route path="/insurence" component={InsurenePayer} />
      <Route path="/delete" component={DeleteUser} />
      <Route path="/edit/:value" component={EditUser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

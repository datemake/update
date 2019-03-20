import React from "react";
import { Switch, Route } from "react-router-dom";

//authorization

//date

//form
import FormLanding from "../src/components/form/FormLanding"
import FormLocation from "../src/components/form/FormLocation"
import FormActivity from "../src/components/form/FormActivity"
import FormFood from "../src/components/form/FormFood"
import FormMemory from "../src/components/form/FormMemory"
import FormReview from "../src/components/form/FormReview"

//landing

//profile

//search



export default (

    <Switch>
      <Route path="/create-date/" exact component={FormLanding} />
      <Route path="/create-date-location/" exact component={FormLocation} />
      <Route path="/create-date-activity/" exact component={FormActivity} />
      <Route path="/create-date-food/" exact component={FormFood} />
      <Route path="/create-date-memory/" exact component={FormMemory} />
      <Route path="/create-date-review/" exact component={FormReview} />


  </Switch>
);
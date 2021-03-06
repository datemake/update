import React from "react";
import { Switch, Route } from "react-router-dom";

//authorization

//date
import DateLanding from "../src/components/date/DateLanding";
import ReviewMain from "../src/components/reviews/ReviewMain"

//form
import FormLanding from "../src/components/form/FormLanding";
import FormLocation from "../src/components/form/FormLocation";
import FormActivity from "../src/components/form/FormActivity";
import FormFood from "../src/components/form/FormFood";
import FormMemory from "../src/components/form/FormMemory";
import FormDescription from "../src/components/form/FormDescription"
import FormReview from "../src/components/form/FormReview";

//landing
import Landing from "../src/components/landing/Landing";
//profile
import Profile from "../src/components/Profile/Profile";

//search
import Search from "../src/components/search/Search";

export default (
  <Switch>
    <Route path="/create-date" exact component={FormLanding} />
    <Route path="/create-date-description" exact component={FormDescription} />
    <Route path="/create-date-location" exact component={FormLocation} />
    <Route path="/create-date-activity" exact component={FormActivity} />
    <Route path="/create-date-food" exact component={FormFood} />
    <Route path="/create-date-memory" exact component={FormMemory} />
    <Route path="/create-date-description" exact component={FormDescription} />
    <Route path="/create-date-review" exact component={FormReview} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/search" exact component={Search} />
    <Route path="/date/:dateId" exact component={DateLanding} />
    <Route path="/date" exact component={DateLanding} />
    <Route path="/" exact component={Landing} />
    <Route path="/review" exact component={ReviewMain}/>

  </Switch>
);

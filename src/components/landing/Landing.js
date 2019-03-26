import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./landing.css";

const Landing = () => {
  return (
    <div id="landing_page">
      <div id="landing_dim">
        <Typography variant="h2" style={{ color: "white", marginTop: "200px" }}>
          There is such a thing as a perfect date
        </Typography>
        <div id="landing_button_div">
          <Typography
            variant="h3"
            style={{ color: "white", fontFamily: "Vollkorn", fontWeight: 900 }}
          >
            Get Inspired
          </Typography>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ fontWeight: 900, marginLeft: "25px" }}
            >
              Explore Dates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

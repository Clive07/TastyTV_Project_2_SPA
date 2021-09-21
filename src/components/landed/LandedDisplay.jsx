import React from "react";

import { Button } from "@mui/material";

import "./landed-display-styles.css";

export default function LandedDisplay(props) {
  function handleClick() {
    props.setPage("home");
  }
  return (
    <div className="landed">
      <Button variant="contained" onClick={handleClick}>
        Enter App
      </Button>
    </div>
  );
}

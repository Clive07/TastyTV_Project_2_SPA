import React from "react";

//import of material icons for style
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

//function that checks if media has been seen and displays accordingly.
//has additional function to toggle if media has been seen or not.
export default function WatchedDisplay(props) {
  function handleClick(option) {
    if (option === "watched") {
      props.setWatched(props.id, true);
    } else if (option === "unwatch") {
      props.setWatched(props.id, false);
    }
  }

  return (
    <section className="watched-display">
      {props.watched === true ? (
        <Button
          variant="contained"
          startIcon={<VisibilityIcon />}
          onClick={() => {
            handleClick("unwatch");
          }}
        >
          Watched
        </Button>
      ) : props.watched === false ? (
        <Button
          variant="contained"
          startIcon={<VisibilityOffIcon />}
          onClick={() => {
            handleClick("watched");
          }}
        >
          Not Watched
        </Button>
      ) : (
        <h4>watched display</h4>
      )}

      {/* {props.watched === true ? (
        <Button
          variant="contained"
          startIcon={Visibility}
          onClick={handleClick}
        >
          Watched
        </Button>
      ) : props.watched === false ? (
        <Button
          variant="contained"
          startIcon={VisibilityOff}
          onClick={handleClick}
        >
          Not Watched
        </Button>
      ) : (
        <h4>error with watched display!</h4>
      )} */}
    </section>
  );
}

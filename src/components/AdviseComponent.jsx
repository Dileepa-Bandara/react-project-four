import React from "react";
import "../scss/advise.scss";
import { Button } from "@material-ui/core";

function AdviseComponent({ func, advice }) {
  return (
    <div className="advise__container">
      <div className="advise">
        <h3>{advice}</h3>
        <Button variant="outlined" color="primary" onClick={() => func()}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default AdviseComponent;

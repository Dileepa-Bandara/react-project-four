import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    margin: "10px",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "10px",
    background: "black",
    borderRadius: "8px",

    "&:hover": {
      opacity: "0.7",
      background: "red",
    },
  },
});

function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Random Advicer</Typography>
          <a href="#" className={classes.link}>
            Code
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

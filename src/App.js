import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import NavBar from "./components/NavBar";
import BackgroundCom from "./components/BackgroundCom";
import AdviseComponent from "./components/AdviseComponent";
import axios from "axios";
import { dataList } from "./components/data.js";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res.data);
        setAdvice(res.data.slip.advice);
      })

      .catch((err) => {
        console.log(err);
      });


  },[count]);

  const adviceFunction = () => {
    setCount((e) => e + 1);
    if (count === dataList.length - 1) {
      setCount(0);
    }
  };

  return (
    <div>
      <Grid container>
        <NavBar></NavBar>
        <BackgroundCom count={count}></BackgroundCom>
        <AdviseComponent
          func={adviceFunction}
          advice={advice}
        ></AdviseComponent>
      </Grid>
    </div>
  );
}

export default App;
// 	https://api.adviceslip.com/advice

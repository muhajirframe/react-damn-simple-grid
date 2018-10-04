import React from "react";
import { render } from "react-dom";
import { Grid } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Grid>
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
      <div>Card 4</div>
      <div>Card 5</div>
    </Grid>
  </div>
);

render(<App />, document.getElementById("root"));

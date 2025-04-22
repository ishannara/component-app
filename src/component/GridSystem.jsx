import { Grid } from "@mui/material";
import React from "react";

function GridSystem() {
  return (
    <>
      <div>
        <h1>GridSystem</h1>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xs={12}>
            <h1 style={{ backgroundColor: "green" }}>Block 1</h1>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <h1 style={{ backgroundColor: "red" }}>Block 2</h1>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <h1 style={{ backgroundColor: "violet" }}>Block 3</h1>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <h1 style={{ backgroundColor: "lightblue" }}>Block 4</h1>
          </Grid>
          {/* <Grid item lg={6} sm={6} xs={12}>
            <h1 style={{ backgroundColor: "lightgreen" }}>Block 5</h1>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <h1 style={{ backgroundColor: "red" }}>Block 6</h1>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

export default GridSystem;

import React from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

function AutoComplete() {
  const skills = ["React", "javascript", "Node.js", "Python"];
  return (
    <>
      <h1>AutoComplete</h1>
      <Stack spacing={2} width={250}>
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          multiple
        />
      </Stack>
    </>
  );
}

export default AutoComplete;

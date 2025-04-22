import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputAdornment, TextField } from "@mui/material";

function SearchBox() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };
 
  let startAdornmentIcon;
  if (searchText !== "") {
    startAdornmentIcon = (
      <InputAdornment position="end">
        <IconButton onClick={handleClear}>
          <CloseIcon />
        </IconButton>
      </InputAdornment>
    );
  } else {
    startAdornmentIcon = null; // No icon if input is empty
  }

  return (
    <>
      <TextField
        autoComplete="off"
        placeholder="Search"
        variant="outlined"
        value={searchText}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: startAdornmentIcon,
        }}
      />
    </>
  );
}

export default SearchBox;

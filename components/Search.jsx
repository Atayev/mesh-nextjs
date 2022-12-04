import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import {toast} from 'react-toastify'
const Search = () => {
    const [query, setQuery] = useState("");

  const handleSearch = () => {
      if (query.length < 3 || query === "") {
          toast('Please enter minimum 3 letters to search')
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        m: "20px 40px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
      }}
    >
      <InputBase
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ ml: 1, flex: 1, fontSize: "13px" }}
        placeholder="Search for item or brand"
        inputProps={{ "aria-label": " search for item or brand " }}
      />
      <IconButton
        type="button"
        sx={{ p: "3px" }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;

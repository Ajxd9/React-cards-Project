import { useState, useContext } from "react";
import DataContext from "../../../store/CardDataContext";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "./SearchTheme";
import SearchIcon from "@mui/icons-material/Search";

const SearchComp = () => {
  const [searchText, setSearchText] = useState("");
  const { filterData, setFilterData } = useContext(DataContext);

  const handleInputChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const filteredData = searchText.trim() === ""
      ? [...filterData]
      : filterData.filter(item =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );

    setFilterData(filteredData);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchText}
        onChange={handleInputChange}
      />
      {filterData?.map((result) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </Search>
  );
};

export default SearchComp;

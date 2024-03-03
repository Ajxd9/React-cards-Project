import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { useContext } from "react";
import CardDataContext from "../../../store/CardDataContext";

const FilterComponent = () => {
  let { setDataFromServer, copyCards } = useContext(CardDataContext);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (!inputValue || inputValue.length < 1) {
      setDataFromServer(copyCards);
      return;
    }
    const cardsSearch = copyCards.filter((card) => {
      return card.title.includes(inputValue);
    });

    setDataFromServer(cardsSearch);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleInputChange}
      />
    </Search>
  );
};

export default FilterComponent;

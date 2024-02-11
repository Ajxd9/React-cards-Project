import { useEffect, useState } from "react";
import CardDataContext from "./CardDataContext";
import axios from "axios";

const CardDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const handleDataFromServer = async () => {
      try {
        let { data } = await axios.get("/cards");
        setSearchData(data);
      } catch (error) {
      }
    };
    handleDataFromServer();
  }, []);

  useEffect(() => {
    setFilterData([...searchData]);
  }, [searchData]);

  return (
    <CardDataContext.Provider value={{ filterData, setFilterData, searchData }}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardDataProvider;
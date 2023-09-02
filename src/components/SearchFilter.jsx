import { useContext, useEffect, useState } from "react";
import { todosContext } from "../contexts/TodosContext";
import history from "../helpers/history";

const SearchFilter = () => {
  const { searchFilter } = useContext(todosContext);

  const getSearchValue = () => {
    const seatch = new URLSearchParams(history.location.search);
    return seatch.get("q");
  };

  const [searchValue, setSearchValue] = useState(getSearchValue);

  useEffect(() => {
    searchFilter(searchValue);
  }, [searchValue]);

  return (
    <input
      className="Search_todo"
      value={searchValue}
      type="text"
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Поиск"
    />
  );
};
export default SearchFilter;

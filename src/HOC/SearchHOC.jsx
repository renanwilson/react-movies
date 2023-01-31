import { SearchContextProvider } from "contexts/SearchContext";

export const SearchHOC = (Children) => {
  return (
    <SearchContextProvider>
      <Children />
    </SearchContextProvider>
  );
};

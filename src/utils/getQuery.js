import { useSearchContext } from "contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import { api } from "services/api";

export function useGetQuery() {
  const { query, setData } = useSearchContext();
  const navigate = useNavigate();
  const getQuery = (event) => {
    if (event.key === "Enter") {
      api.get("search/movie", { params: { query: query } }).then((resp) => {
        setData(resp.data.results);
      });
      navigate("/search");
    }
  };
  const useGetQueryButton = () => {
    api.get("search/movie", { params: { query: query } }).then((resp) => {
      setData(resp.data.results);
    });
    navigate("/search");
  };
  return { getQuery, useGetQueryButton };
}

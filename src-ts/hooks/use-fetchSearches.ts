import { useState, useEffect, useCallback } from "react";
import { getSearches } from "../apiCalls/searchApiCall";

const useFetchSearches = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<any[]>([]);

  const performSearch = useCallback(async () => {
    try {
      const response = await getSearches(query);
      setCards(response.results);
      if (response.results.length === 0) setError("No searches found !");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
    setIsLoading(false);
  }, [query, getSearches]);

  useEffect(() => {
    setError("");
    if (query) {
      setIsLoading(true);
      let timer = setTimeout(performSearch, 500);
      return () => clearTimeout(timer);
    } else setCards([]);
  }, [performSearch]);

  return {
    setQuery,
    error,
    isLoading,
    cards,
  };
};

export default useFetchSearches;

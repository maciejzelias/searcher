import { TextField, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../card/Card";

import { countAverageRisk } from "../../helpers/averageRiskHelper";
import { getSearches } from "../../apiCalls/searchApiCall";

export default function MainContent() {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    if (query) setIsLoading(true);
    else setIsLoading(false);
    setError("");
    let timer = setTimeout(async () => {
      if (query) {
        try {
          const response = await getSearches(query);
          setCards(response.data.results);
          setError(response.msg);
        } catch (error) {
          setError("Error during fetching data!");
        }
      } else {
        setCards([]);
      }
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleChangeSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };

  return (
    <Box display="grid" gap={3} mt={3} mx="auto" maxWidth="36rem">
      <TextField label="Search" defaultValue="" onChange={handleChangeSearch} />
      <Typography textAlign="center">
        Results count: {cards.length} | Average risk:
        {cards.length !== 0
          ? countAverageRisk(cards.map((card) => card.risk_score))
          : "N/A"}
      </Typography>
      {isLoading && <p>Loading data...</p>}
      {error ? (
        <p>{error}</p>
      ) : (
        cards.map((card) => <Card key={card.id} props={card} />)
      )}
    </Box>
  );
}

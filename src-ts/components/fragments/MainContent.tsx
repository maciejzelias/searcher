import { TextField, Typography, Box } from "@mui/material";
import Card from "../Card";

import { countAverageRisk } from "../../helpers/averageRiskHelper";
import useFetchSearches from "../../hooks/use-fetchSearches";

export default function MainContent() {
  const { setQuery, cards, error, isLoading } = useFetchSearches();

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

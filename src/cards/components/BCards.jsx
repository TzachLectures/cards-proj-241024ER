import BCard from "./BCard";
import { Box, Typography } from "@mui/material";

function BCards({ cards, toggleLike }) {
  if (cards.length === 0) {
    return (
      <Box>
        <Typography>אין כרטיסים להציג</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <BCard key={card._id} card={card} toggleLike={toggleLike} />
      ))}
    </Box>
  );
}

export default BCards;

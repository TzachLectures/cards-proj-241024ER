import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BCards from "../cards/components/BCards";
function CardsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")
      .then((response) => response.json())
      .then((json) => setCards(json.slice(0, 10)));
  }, []);

  return (
    <div>
      <Typography>Cards Page</Typography>
      <BCards cards={cards} />
    </div>
  );
}

export default CardsPage;

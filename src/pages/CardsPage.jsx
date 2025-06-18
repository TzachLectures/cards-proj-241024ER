import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BCards from "../cards/components/BCards";
import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";

function CardsPage() {
  const [cards, setCards] = useState([]);

  const setSnack = useSnack();

  const getCardsFromServer = async () => {
    const response = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
    );
    setCards(response.data.slice(0, 10));
    setSnack("success", "All cards imported successfully");
  };

  useEffect(() => {
    getCardsFromServer();
  }, []);

  return (
    <div>
      <Typography>Cards Page</Typography>
      <BCards cards={cards} />
    </div>
  );
}

export default CardsPage;

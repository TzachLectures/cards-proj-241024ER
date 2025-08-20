import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import BCards from "../cards/components/BCards";
import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";
import { useCurrentUser } from "../users/providers/UserProvider";
import { useSearchParams } from "react-router-dom";

function CardsPage() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const setSnack = useSnack();
  const [searchParams] = useSearchParams();
  const { token } = useCurrentUser();

  const getCardsFromServer = useCallback(async () => {
    const response = await axios.get("http://localhost:3000/cards");
    setCards(response.data.slice(0, 10));
    setSnack("success", "All cards imported successfully");
  }, [setSnack, setCards]);

  const toggleLike = useCallback(
    async (cardId) => {
      try {
        const response = await axios.patch(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" +
            cardId,
          {},
          { headers: { "x-auth-token": token } }
        );
      } catch (error) {
        console.log(error);
      }
    },
    [token]
  );

  useEffect(() => {
    getCardsFromServer();
  }, []);

  useEffect(() => {
    const q = searchParams.get("q");
    setFilteredCards(
      cards.filter((c) => c.title.includes(q) || c.subtitle.includes(q))
    );
  }, [searchParams]);

  return (
    <div>
      <Typography>Cards Page</Typography>
      <BCards cards={filteredCards} toggleLike={toggleLike} />
    </div>
  );
}

export default CardsPage;

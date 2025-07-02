import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import BCards from "../cards/components/BCards";
import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";
import { useCurrentUser } from "../users/providers/UserProvider";

function CardsPage() {
  const [cards, setCards] = useState([]);

  const setSnack = useSnack();

  const { token } = useCurrentUser();

  const getCardsFromServer = useCallback(async () => {
    const response = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
    );
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

  return (
    <div>
      <Typography>Cards Page</Typography>
      <BCards cards={cards} toggleLike={toggleLike} />
    </div>
  );
}

export default CardsPage;

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesDict";

function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="contained" onClick={() => navigate(ROUTES.root)}>
        Home
      </Button>
      <Button variant="contained" onClick={() => navigate(ROUTES.about)}>
        About
      </Button>
    </div>
  );
}

export default Footer;

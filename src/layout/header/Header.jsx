import { AppBar, Toolbar } from "@mui/material";
import HeaderLink from "./HeaderLink";
import ROUTES from "../../routes/routesDict";
function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar>
        <HeaderLink to={ROUTES.root} label={"Home"} />
        <HeaderLink to={ROUTES.about} label={"About"} />
        <HeaderLink to={ROUTES.favorite} label={"Favorite cards"} />
        <HeaderLink to={ROUTES.register} label={"Register"} />
        <HeaderLink to={ROUTES.login} label={"Login"} />
        <HeaderLink to={ROUTES.sandbox} label={"Sand box"} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

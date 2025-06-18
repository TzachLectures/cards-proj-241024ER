import { AppBar, Box, Button, Toolbar } from "@mui/material";
import HeaderLink from "./HeaderLink";
import ROUTES from "../../routes/routesDict";
import { useTheme } from "../../providers/CustomThemeProvider";
function Header() {
  const { toggleMode, isDark } = useTheme();

  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <HeaderLink to={ROUTES.root} label={"Home"} />
          <HeaderLink to={ROUTES.about} label={"About"} />
          <HeaderLink to={ROUTES.favorite} label={"Favorite cards"} />
          <HeaderLink to={ROUTES.sandbox} label={"Sand box"} />
        </Box>
        <Box>
          <HeaderLink to={ROUTES.register} label={"Register"} />
          <HeaderLink to={ROUTES.login} label={"Login"} />

          <Button onClick={toggleMode} sx={{ color: "white" }}>
            {isDark ? "Light" : "Dark"} Mode
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

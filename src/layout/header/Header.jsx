import { AppBar, Box, Button, TextField, Toolbar } from "@mui/material";
import HeaderLink from "./HeaderLink";
import ROUTES from "../../routes/routesDict";
import { useTheme } from "../../providers/CustomThemeProvider";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function Header() {
  const { toggleMode, isDark } = useTheme();
  const { user } = useCurrentUser();
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ q: query });
  }, [query]);

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
          <TextField
            placeHolder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {user ? null : (
            <>
              <HeaderLink to={ROUTES.register} label={"Register"} />
              <HeaderLink to={ROUTES.login} label={"Login"} />
            </>
          )}

          <Button onClick={toggleMode} sx={{ color: "white" }}>
            {isDark ? "Light" : "Dark"} Mode
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

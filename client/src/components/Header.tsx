import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

const Header = (props: any) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">E-STORE</Typography>
        <Switch
          checked={props.darkMode}
          onChange={props.handleThemeToggle}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

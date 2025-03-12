import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="green" fontWeight="bold">
          GUZO
        </Typography>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

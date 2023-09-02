import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";
import AccountMenu from "./menu";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  let navigation = useNavigate();
  let { user } = useAuth();
  return (
    <AppBar  position="static">
      <Toolbar sx={{ mx: 10, justifyContent: "space-between" }}>
        <Typography
          onClick={() => {
            navigation("/");
          }}
          variant="h6"
          component="div"
        >
          🚲 BD BIKE PORTAL
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={() => {
              navigation("/");
            }}
            component={Link}
            to="/"
            color="inherit"
          >
            Home
          </Button>
          <Button
            onClick={() => {
              navigation("/bikes");
            }}
            component={Link}
            to="/bikes"
            color="inherit"
          >
            Bikes
          </Button>
          <Button
            onClick={() => {
              navigation("/posts");
            }}
            component={Link}
            to="/posts"
            color="inherit"
          >
            Posts
          </Button>
          <Button
            onClick={() => {
              navigation("/contact");
            }}
            component={Link}
            to="/contact"
            color="inherit"
          >
            Contact
          </Button>
          {!user && (
            <>
              {" "}
              <Button
                onClick={() => {
                  navigation("/signin");
                }}
                to="/signin"
                color="inherit"
              >
                Sign in
              </Button>
              <Button
                onClick={() => {
                  navigation("/signup");
                }}
                to="/signup"
                color="inherit"
              >
                Register
              </Button>
            </>
          )}
          {user && <AccountMenu />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

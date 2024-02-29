import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
export default function Layout() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const routerBar: Array<string> = ["home", "center", "about"];
  //   React.useEffect(() => {
  // (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  //   }, [value]);
  return (
    <div>
      <Box sx={{ pb: 7, paddingTop: "40px" }}>
        <Paper
          sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
          style={{ zIndex: 999 }}
          elevation={3}
        >
          <Header></Header>
        </Paper>
        <Outlet />

        <CssBaseline />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            className="bottom_ios"
            showLabels={true}
            value={value}
            onChange={(e, newValue: number) => {
              console.log(e);
              setValue(newValue);
              navigate("/" + routerBar[newValue]);
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
            ></BottomNavigationAction>
            <BottomNavigationAction
              label="Center"
              icon={<FavoriteIcon />}
            ></BottomNavigationAction>
            <BottomNavigationAction
              label="About"
              icon={<PersonIcon />}
            ></BottomNavigationAction>
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

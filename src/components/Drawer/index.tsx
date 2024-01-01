import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import MovingIcon from "@mui/icons-material/Moving";
import SchoolIcon from "@mui/icons-material/School";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link, Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import HeaderComp from "../Header";
import React from "react";
// import { IconButton } from "@mui/material";

const drawerWidth = 220;

export default function ResponsiveDrawer() {
  const styles = {
    gradient: {
      backgroundImage: "linear-gradient(to bottom, #4f46e5 , #818cf8)",
    },
    forColor: {
      color: "white",
      fontSize: "30px",
    },
  };


 const [mobileOpen, setMobileOpen] = React.useState(false);

 const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
 };
  const drawer = (
    <div className="h-full" style={styles.gradient}>
      <Toolbar>
        <h1
          className="text-2xl flex justify-center w-full"
          style={styles.forColor}>
          Coligo
        </h1>
      </Toolbar>

      <List className="space-y-4">
        <Link to="/dashboard">
          <ListItem className="drawerItem">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon style={styles.forColor} />
              </ListItemIcon>
              <ListItemText className="txt" primary={"dashboard"} style={styles.forColor} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/schedule">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon style={styles.forColor} />
              </ListItemIcon>
              <ListItemText style={styles.forColor} primary={"schedule"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/courses">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon style={styles.forColor} />
              </ListItemIcon>
              <ListItemText style={styles.forColor} primary={"courses"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <List className="space-y-4">
        <Link to="gradebook">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon style={styles.forColor} />
              </ListItemIcon>
              <ListItemText style={styles.forColor} primary={"Grade book"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="performance">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <MovingIcon style={styles.forColor} />
              </ListItemIcon>
              <ListItemText style={styles.forColor} primary={"Performance"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/annoucement">
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <CampaignIcon style={styles.forColor} />
              </ListItemIcon>
              <ListItemText style={styles.forColor} primary={"annoucement"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }} className="bg-gray-100 rounded-md">
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <HeaderComp />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

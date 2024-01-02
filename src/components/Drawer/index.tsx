import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import MovingIcon from "@mui/icons-material/Moving";
import SchoolIcon from "@mui/icons-material/School";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link, Outlet, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { t } from "i18next";
import React from "react";
import HeaderComp from "../Header";
import { PageRoutes } from "../Utils";
// import { IconButton } from "@mui/material";

const drawerWidth = 220;

export default function ResponsiveDrawer() {
  const { pathname } = useLocation();

  const styles = {
    gradient: {
      backgroundImage: "linear-gradient(to bottom, #4f46e5,##5c54e3, #98a1fa)",
    },
    iconSize: {
      fontSize: "30px",
    },
    listItemButtonStyle: {
      "&:hover": {
        backgroundColor: "white!important",
        color: "#818cf8!important",
      },
      "&:hover .MuiListItemIcon-root": {
        color: "#818cf8!important",
      },
      "&.Mui-selected": {
        backgroundColor: "white!important",
        color: "#818cf8!important",
      },
      "& .MuiListItemIcon-root": {
        color: "white!important",
      },
      "&.Mui-selected .MuiListItemIcon-root": {
        color: "#818cf8!important",
      },
      paddingBlock: "16px",
    },
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="h-full" style={styles.gradient}>
      <Toolbar>
        <h1 className="text-2xl flex justify-center w-full">{t("coligo")}</h1>
      </Toolbar>
      <List>
        <Link to={PageRoutes.Dashboard}>
          <ListItemButton
            sx={styles.listItemButtonStyle}
            selected={pathname == PageRoutes.Dashboard}
          >
            <ListItemIcon>
              <HomeIcon style={styles.iconSize} />
            </ListItemIcon>
            <ListItemText className="txt" primary={t("dashboard")} />
          </ListItemButton>
        </Link>

        <Link to={PageRoutes.Schedule}>
          <ListItemButton
            sx={styles.listItemButtonStyle}
            selected={pathname == PageRoutes.Schedule}
          >
            <ListItemIcon>
              <CalendarMonthIcon style={styles.iconSize} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary={t("schedule")} />
          </ListItemButton>
        </Link>

        <Link to={PageRoutes.Courses}>
          <ListItemButton
            sx={styles.listItemButtonStyle}
            selected={pathname == PageRoutes.Courses}
          >
            <ListItemIcon>
              <AssignmentIcon style={styles.iconSize} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary={t("courses")} />
          </ListItemButton>
        </Link>

        <Link to={PageRoutes.Gradebook}>
          <ListItemButton
            sx={styles.listItemButtonStyle}
            selected={pathname == PageRoutes.Gradebook}
          >
            <ListItemIcon>
              <SchoolIcon style={styles.iconSize} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary={t("gradeBook")} />
          </ListItemButton>
        </Link>

        <Link to={PageRoutes.Performance}>
          <ListItemButton
            sx={styles.listItemButtonStyle}
            selected={pathname == PageRoutes.Performance}
          >
            <ListItemIcon>
              <MovingIcon style={styles.iconSize} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary={t("performance")} />
          </ListItemButton>
        </Link>

        <Link to={PageRoutes.Announcement}>
          <ListItemButton
            sx={styles.listItemButtonStyle}
            selected={pathname == PageRoutes.Announcement}
          >
            <ListItemIcon>
              <CampaignIcon style={styles.iconSize} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary={t("announce")} />
          </ListItemButton>
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
        }}
      >
        <HeaderComp handleDrawerToggle={handleDrawerToggle} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
          }}
          PaperProps={{
            sx: {
              backgroundColor:
                "linear-gradient(to bottom,#4f46e5,##5c54e3, #98a1fa)",
              color: "white",
              "::selection": {
                backgroundColor: "white",
              },
              ":hover": { backgroundColor: "white" },
            },
          }}
        >
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
          PaperProps={{
            sx: {
              backgroundColor:
                "linear-gradient(to bottom, #4f46e5,##5c54e3, #98a1fa)",
              color: "white",
              "::selection": {
                backgroundColor: "white",
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

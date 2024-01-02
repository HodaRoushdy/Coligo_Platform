import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Typography, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { t } from "i18next";
import AuthBtn from "../auth-btn";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface IHeaderProps {
  handleDrawerToggle: () => void;
}

const HeaderComp = ({ handleDrawerToggle }: IHeaderProps) => {
  const imgUrl =
    "https://images.unsplash.com/photo-1521038199265-bc482db0f923?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{t("profile")}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{t("my.account")}</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          sx={{ color: "#4f46e5" }}
          size="large"
          aria-label="show 17 new notifications"
        >
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>{t("messages")}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          sx={{ color: "#4f46e5" }}
          size="large"
          aria-label="show 17 new notifications"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>{t("notifications")}</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          style={{ color: "#4f46e5" }}
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>{t("profile")}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Toolbar className="bg-gray-100">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon style={{ color: "#4f46e5" }} />
        </IconButton>
        <Typography
          variant="h4"
          noWrap
          component="div"
          className=" text-gray-600"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
          }}
        >
          {t("welcome")}
        </Typography>
        <Typography
          variant="h4"
          noWrap
          component="div"
          className=" text-gray-600"
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
            },
          }}
        >
          {t("coligo")}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Search
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
          }}
          className="rounded-full  xl:flex bg-indigo-500"
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <AuthBtn />

        <IconButton
          className="sm:hidden lg:flex"
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon
              style={{
                color: "#6366f1",
                fontSize: "var(--Icon-fontSize,25px)",
              }}
            />
          </Badge>
        </IconButton>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon
              style={{
                color: "#6366f1",
                fontSize: "var(--Icon-fontSize,25px)",
              }}
            />
          </Badge>
        </IconButton>

        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          {<img src={imgUrl} className="w-10 h-10 rounded-full" />}
        </IconButton>
      </Toolbar>

      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default HeaderComp;

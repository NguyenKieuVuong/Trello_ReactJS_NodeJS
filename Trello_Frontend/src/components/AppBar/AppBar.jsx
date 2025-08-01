import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as TrelloIcon } from "~/assets/ico-trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { Typography } from "@mui/material";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profiles from "./Menus/Profiles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import theme from "~/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import React from "react";
function AppBar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Box
        sx={{
          with: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
          paddingX: 2,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppsIcon sx={{ color: "white" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <SvgIcon
              component={TrelloIcon}
              inheritViewBox
              fontSize="small"
              sx={{ color: "white" }}
            />
            <Typography
              variant="span"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "white",
              }}
            >
              Trello
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button
              sx={{
                color: "#fff",
                border: "none",
                "&:hover": {
                  border: "none",
                },
              }}
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
            >
              CREATE
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            sx={{
              minWidth: "120px",
              maxWidth: "170px",
              "& label": { color: "#fff" },
              "& input": { color: "#fff" },
              "& label.Mui-focused": { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
            }}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            id="outlined-search"
            label="Search..."
            size="small"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize="small"
                  sx={{
                    color: searchValue ? "#fff" : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => setSearchValue("")}
                />
              ),
            }}
          />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
              <NotificationsNoneIcon sx={{ color: "white" }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  );
}

export default AppBar;

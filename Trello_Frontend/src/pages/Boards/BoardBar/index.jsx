import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
function BoardBar() {
  const MENU_STYLE = {
    color: "#fff",
    bgcolor: "transparent",
    border: "none",
    paddingX: "5px",
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
    "&:hover": {
      bgcolor: "primary.50",
    },
  };
  return (
    <>
      <Box
        sx={{
          with: "100%",
          height: (theme) => theme.trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
          borderBottom: "1px solid #FFF",
          paddingX: 2,
           "&::-webkit-scrollbar-track": {
              m: 2,
            },
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label="Trello App"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<AddToDriveIcon />}
            label="Add to Google Drive"
            clickable
          />

          <Chip
            sx={MENU_STYLE}
            icon={<BoltIcon />}
            label="Automation"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<FilterListIcon />}
            label="Filter"
            clickable
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                borderColor: "#fff",
              },
            }}
            startIcon={<PersonAddIcon />}
            variant="outlined"
          >
            Invite
          </Button>
          <AvatarGroup
            sx={{
              gap: "10px",

              "& .MuiAvatar-root": {
                width: "32px",
                height: "32px",
                fontSize: "1rem",
                border: "none",
                cursor:'pointer',
                '&:first-of-type':{
                  bgcolor:'#a4b0be'
                }
              },
            }}
            max={4}
          >
            <Tooltip title="Remy Sharp">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
              />
            </Tooltip>
            <Tooltip title="Travis Howard">
              <Avatar
                alt="Travis Howard"
                src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
              />
            </Tooltip>
            <Tooltip title="Cindy Baker">
              <Avatar
                alt="Cindy Baker"
                src="https://cdn-icons-png.flaticon.com/512/6998/6998132.png"
              />
            </Tooltip>
            <Tooltip title="Agnes Walker">
              <Avatar
                alt="Agnes Walker"
                src="https://cdn-icons-png.flaticon.com/512/6998/6998118.png"
              />
            </Tooltip>
            <Tooltip title="Trevor Henderson">
              <Avatar
                alt="Trevor Henderson"
                src="https://cdn-icons-png.flaticon.com/512/6998/6998085.png"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
}

export default BoardBar;

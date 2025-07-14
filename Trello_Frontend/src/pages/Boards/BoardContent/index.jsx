import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import theme from "~/theme";
import { bgcolor } from "@mui/system";
const Column_Header_Height = "50px";
const Column_Footer_Height = "56px";
function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          with: "100%",
          // string literal javascript dung dau `` de gan variable
          height: (theme) => theme.trello.boardContentHeight,
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          p: "10px 0",
        }}
      >
        <Box
          sx={{
            bgcolor: "inherit",
            width: "100%",
            height: "100%",
            display: "flex",
            overflowX: "auto",
            overflowY: "hidden",
            "&::-webkit-scrollbar-track": {
              m: 2,
            },
          }}
        >
          {" "}
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              ml: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )})`,
            }}
          >
            <Box
              sx={{
                height: Column_Header_Height,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "700", cursor: "pointer", fontSize: "1rem" }}
              >
                Column Title
              </Typography>
              <Box>
                <Tooltip title="Menu">
                  <ExpandMoreIcon
                    sx={{
                      color: "text.primary",
                      cursor: "pointer",
                    }}
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? "basic-menu-column-dropdown" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  ></ExpandMoreIcon>
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-column-dropdown",
                    },
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add New Card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>

                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "0 5px",
                m: "0 5px",
                gap: 1,
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                  `calc( 
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} - 
              ${Column_Header_Height} - 
              ${Column_Footer_Height})`,
                "&::-webkit-scrollbar-thumb": {
                  background: "#ced0da",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#bfc2cf",
                },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Nature</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    p: "0 4px 8px 4px",
                  }}
                >
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<ModeCommentIcon />}>
                    15
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    25
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                height: Column_Footer_Height,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add New Card</Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              ml: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) =>
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )})`,
            }}
          >
            <Box
              sx={{
                height: Column_Header_Height,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "700", cursor: "pointer", fontSize: "1rem" }}
              >
                Column Title
              </Typography>
              <Box>
                <Tooltip title="Menu">
                  <ExpandMoreIcon
                    sx={{
                      color: "text.primary",
                      cursor: "pointer",
                    }}
                    id="basic-column-dropdown"
                    aria-controls={
                      open ? "basic-menu-column-dropdown" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  ></ExpandMoreIcon>
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-column-dropdown",
                    },
                  }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add New Card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>

                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteForeverIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "0 5px",
                m: "0 5px",
                gap: 1,
                overflowX: "hidden",
                overflowY: "auto",
                maxHeight: (theme) =>
                  `calc( 
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} - 
              ${Column_Header_Height} - 
              ${Column_Footer_Height})`,
                "&::-webkit-scrollbar-thumb": {
                  background: "#ced0da",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#bfc2cf",
                },
              }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Nature</Typography>
                </CardContent>
                <CardActions
                  sx={{
                    p: "0 4px 8px 4px",
                  }}
                >
                  <Button size="small" startIcon={<GroupIcon />}>
                    20
                  </Button>
                  <Button size="small" startIcon={<ModeCommentIcon />}>
                    15
                  </Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>
                    25
                  </Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  cursor: "pointer",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                  overflow: "unset",
                }}
              >
                <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                height: Column_Footer_Height,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add New Card</Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BoardContent;

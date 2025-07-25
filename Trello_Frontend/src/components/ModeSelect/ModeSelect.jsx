import { useState } from "react";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  // console.log("prefersDarkMode: ", prefersDarkMode);
  // console.log("prefersLightMode: ", prefersLightMode);
  const handleChange = (event) => {
    const ModeThemeDarkLight = event.target.value;
    setMode(ModeThemeDarkLight);
    // setAge(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="demo-select-small-label"
          sx={{
            color: "#fff",
            "&.Mui-focused": {
              color: "#fff",
            },
          }}
        >
          Mode
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
          sx={{
            color: "#fff",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            ".MuiSvgIcon-root": {
              color: "#fff",
            },
          }}
        >
          <MenuItem value="light">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LightModeIcon fontSize="small" />
              Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DarkModeOutlinedIcon fontSize="small" />
              Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SettingsBrightnessIcon fontSize="small" />
              System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default ModeSelect;

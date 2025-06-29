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
        <InputLabel id="demo-select-small-label">Mode</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <div
              className=""
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <LightModeIcon fontSize="small" />
              Light
            </div>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DarkModeOutlinedIcon fontSize="medium" />
              Dark
            </Box>
          </MenuItem>
          <MenuItem value="system" fontSize="large">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SettingsBrightnessIcon />
              System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default ModeSelect;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@mui/material";
import "./App.css";
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
import Box from "@mui/material";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <>
      <Button
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
          localStorage.setItem("light-dark-mode");
          localStorage.getItem("light-dark-mode");
        }}
      >
        {mode === "light" ? "Turn dark" : "Turn light"}
      </Button>
    </>
  );
}
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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ModeSelect></ModeSelect>
      <ModeToggle></ModeToggle>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import tw from "tailwind.macro";

// Elements
import * as DOM from "../elements/DOM";

// CSS
const SwitchContainer = tw.div`absolute top-10 left-10`;

const Letter = tw.div`font-serif text-center text-xs font-black text-black pt-1`;

const THEME = {
  LIGHT: "light",
  DARK: "dark"
};

function getTheme(theme) {
  return theme ? THEME.DARK : THEME.LIGHT;
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      DOM.addClassToBody(THEME.LIGHT);
      DOM.removeClassFromBody(THEME.DARK);
      break;
    }
    case THEME.DARK: {
      DOM.addClassToBody(THEME.DARK);
      DOM.removeClassFromBody(THEME.LIGHT);
      break;
    }
    default:
      break;
  }
}

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);

  // To handle the theme change
  const handleChange = check => {
    const theme = getTheme(check);

    setChecked(check);
    toggleTheme(theme);
  };

  // Default to Dark Theme on a new and reloaded site
  useEffect(() => {
    const check = DOM.hasClassOfBody(THEME.DARK);
    handleChange(check);
  }, []);

  return (
    <SwitchContainer className="currentTheme">
      {/* eslint-disable-next-line */}
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={<Letter>D</Letter>}
          uncheckedIcon={<Letter>L</Letter>}
          offColor="#d9dfe2"
          offHandleColor="#fff"
          onColor="#999"
          onHandleColor="#282c35"
        />
      </label>
    </SwitchContainer>
  );
};

export default ThemeSwitch;

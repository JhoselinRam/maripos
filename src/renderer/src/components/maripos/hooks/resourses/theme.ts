import { useEffect, useState } from 'react';
import { UseTheme } from './theme-types';

export function useTheme(): UseTheme {
  //theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  //-------------------------------------------------
  //-------------------------------------------------

  //Get the initial theme from the backend
  async function initialTheme(): Promise<void> {
    const backendTheme = await window.api.theme.initialTheme();
    setTheme(backendTheme);
  }

  //-------------------------------------------------
  //-------------------------------------------------

  //On startup
  useEffect(() => {
    initialTheme(); //Fetch and set the initial theme
    window.api.theme.update((_event, backendTheme) => setTheme(backendTheme)); //Updates the theme if a change occurs on the backend
  }, []);

  //-------------------------------------------------
  //-------------------------------------------------

  return {
    theme
  };
}

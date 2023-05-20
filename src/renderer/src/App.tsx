import { useEffect, useState } from 'react';
import Maripos from './components/maripos/maripos';

function App(): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  async function initialTheme(): Promise<void> {
    const backendTheme = await window.api.theme.initialTheme();
    setTheme(backendTheme);
  }

  useEffect(() => {
    initialTheme();
    window.api.theme.update((_event, backendTheme) => setTheme(backendTheme));
  }, []);

  return <Maripos theme={theme} />;
}

export default App;

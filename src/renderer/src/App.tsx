import { useMaripos } from './components/maripos/hooks/use-maripos';
import Maripos from './components/maripos/maripos';

function App(): JSX.Element {
  const { theme, language } = useMaripos();

  return <Maripos theme={theme} language={language} />;
}

export default App;

import { useMaripos } from './components/maripos/hooks/use-maripos';
import Maripos from './components/maripos/maripos';

function App(): JSX.Element {
  const { theme } = useMaripos();

  return <Maripos theme={theme} />;
}

export default App;

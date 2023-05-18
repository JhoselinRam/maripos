import { Provider } from 'react-redux';
import store from '@renderer/store/store';
import MainApp from '../main-app/main-app';

function Maripos(): JSX.Element {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default Maripos;

import { Provider } from 'react-redux';
import store from '@renderer/store/store';
import MainApp from './main-app/main-app';
import { MariposProps } from './maripos-types';
import { setTheme } from '@renderer/theme/theme';
import { useEffect } from 'react';

function Maripos({ theme }: MariposProps): JSX.Element {
  //Keep updated the theme state in the store
  useEffect(() => {
    store.dispatch(setTheme(theme));
  }, [theme]);

  //-------------------------------------------------
  //-------------------------------------------------

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default Maripos;

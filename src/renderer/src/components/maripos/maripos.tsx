import { Provider } from 'react-redux';
import store from '@renderer/store/store';
import MainApp from './main-app/main-app';
import { MariposProps } from './maripos-types';
import { setTheme } from '@renderer/theme/theme';
import { useEffect } from 'react';
import { setLanguage } from '@renderer/language/language';

function Maripos({ theme, language }: MariposProps): JSX.Element {
  //Keep updated the theme state in the store
  useEffect(() => {
    store.dispatch(setTheme(theme));
    store.dispatch(setLanguage(language));
  }, [theme, language]);

  //-------------------------------------------------
  //-------------------------------------------------

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default Maripos;

import Store, { Schema } from 'electron-store';
import { AllThemes } from './themes/themes-types';
import { LocalStore, LocalStoreObject } from './local-theme-types';
import { AllLanguages } from './language/languaje-types';
import storeThemes from './themes/themes';
import { BrowserWindow } from 'electron';
import storeLanguage from './language/language';

function localStore(window: BrowserWindow): LocalStoreObject {
  //Local store schema
  const schema: Schema<LocalStore> = {
    lang: {
      type: 'string',
      default: import.meta.env.MAIN_VITE_DEFAULT_LANGUAGE,
      enum: AllLanguages
    },
    theme: {
      type: 'string',
      default: import.meta.env.MAIN_VITE_DEFAULT_THEME,
      enum: AllThemes
    }
  };

  //Store object
  const store = new Store({
    encryptionKey: import.meta.env.MAIN_VITE_STORE_KEY,
    schema
  });

  //Theme functions
  const themes = storeThemes(store, window);
  //Language functions
  const lang = storeLanguage(store, window);

  //Retusrns all assets
  return {
    store,
    ...themes,
    ...lang
  };
}

export default localStore;

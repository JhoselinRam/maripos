import Store, { Schema } from 'electron-store';
import { AllThemes } from './themes/themes-types';
import { LocalStore, LocalStoreObject } from './local-theme-types';
import { AllLanguages } from './language/languaje';
import storeThemes from './themes/themes';
import { BrowserWindow } from 'electron';

function localStore(window: BrowserWindow): LocalStoreObject {
  //Local store schema
  const schema: Schema<LocalStore> = {
    lang: {
      type: 'string',
      default: 'system',
      enum: AllLanguages
    },
    theme: {
      type: 'string',
      default: 'system',
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

  //Retusrns all assets
  return {
    store,
    ...themes
  };
}

export default localStore;

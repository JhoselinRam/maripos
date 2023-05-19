import Store, { Schema } from 'electron-store';
import { AllThemes } from './themes/themes-types';
import { LocalStore } from './local-theme-types';
import { AllLanguages } from './language/languaje';
import { nativeTheme } from 'electron';

//------------------ Schema -----------------------

const schema: Schema<LocalStore> = {
  //Aplication lenguaje
  lang: {
    type: 'string',
    default: 'system',
    enum: AllLanguages
  },
  //Aplication theme
  theme: {
    type: 'string',
    default: 'system',
    enum: AllThemes
  }
};

//------------------- Store -----------------------

const localStore = new Store({
  encryptionKey: import.meta.env.MAIN_VITE_STORE_KEY,
  schema
});

//-------------------------------------------------
//----------------- Set Theme ---------------------

export function setThemeFromStoreValue(): void {
  nativeTheme.themeSource = localStore.get('theme');
}

//-------------------------------------------------

export default localStore;
